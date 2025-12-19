import fs from "fs";
import xlsx from "xlsx";


const leads = [];
let nextLeadId = 1;

export const addLead = async (req, res) => {
  try {
    const lead = {
      _id: String(nextLeadId++),
      owner: req.user.id,
      name: req.body.name,
      company: req.body.company,
      email: req.body.email || "",
      stage: req.body.stage || "new",
    };

    leads.push(lead);
    res.status(201).json(lead);
  } catch (err) {
    console.error("Failed to add lead:", err);
    res.status(500).json({ message: "Failed to add lead" });
  }
};

export const getLeads = async (req, res) => {
  const userLeads = leads.filter((l) => l.owner === req.user.id);
  res.json(userLeads);
};

export const updateLeadStage = async (req, res) => {
  try {
    const { stage } = req.body;
    const lead = leads.find(
      (l) => l._id === req.params.id && l.owner === req.user.id
    );

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    lead.stage = stage;
    res.json({ message: "Updated" });
  } catch (err) {
    console.error("Failed to update lead:", err);
    res.status(500).json({ message: "Failed to update lead" });
  }
};

export const uploadLeadsFromExcel = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet);

    let importedCount = 0;

    for (const row of rows) {
      const lead = {
        _id: String(nextLeadId++),
        owner: req.user.id,
        name: row.name || row.Name || "Unnamed Lead",
        company: row.company || row.Company || "Unknown Company",
        email: row.email || row.Email || "",
        stage: row.stage || row.Stage || "new",
      };

      leads.push(lead);
      importedCount++;
    }

    // Clean up uploaded file (best-effort)
    fs.unlink(req.file.path, () => {});

    res.json({
      message: "Leads imported successfully",
      imported: importedCount,
    });
  } catch (err) {
    console.error("Failed to import leads from Excel:", err);
    res.status(500).json({ message: "Failed to import leads from Excel" });
  }
};
