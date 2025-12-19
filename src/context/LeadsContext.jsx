import { createContext, useContext, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/api";

const LeadsContext = createContext();

export function LeadsProvider({ children }) {
  const [leads, setLeads] = useState([]);

  const authHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });

  const fetchLeads = async () => {
    const res = await axios.get(`${API_BASE_URL}/api/leads`, {
      headers: authHeaders(),
    });
    setLeads(res.data);
  };

  const addLead = async (payload) => {
    const res = await axios.post(`${API_BASE_URL}/api/leads`, payload, {
      headers: authHeaders(),
    });
    // Optimistically update local state
    setLeads((prev) => [...prev, res.data]);
    return res.data;
  };

  const updateLeadStage = async (id, stage) => {
    await axios.patch(
      `${API_BASE_URL}/api/leads/${id}`,
      { stage },
      {
        headers: authHeaders(),
      }
    );

    setLeads((prev) =>
      prev.map((l) => (l._id === id ? { ...l, stage } : l))
    );
  };

  return (
    <LeadsContext.Provider
      value={{ leads, fetchLeads, addLead, updateLeadStage }}
    >
      {children}
    </LeadsContext.Provider>
  );
}

export function useLeads() {
  return useContext(LeadsContext);
}
