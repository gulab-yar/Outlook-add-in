import React, { useState } from "react";
import NavigationArrows from "./NavigationArrows";
import Footer from "./Footer";

const EventTypes: React.FC = () => {
  const [events, setEvents] = useState([
    { title: "Discovery Call", duration: "30 mins", type: "One-on-One", color: "#e2ec80" },
    { title: "Follow-Up Conversation", duration: "30 mins", type: "One-on-One", color: "#79dd5b" },
    { title: "Webinar", duration: "1hr", type: "Group", color: "#338dc2" },
  ]);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [type, setType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [searchText, setSearchText] = useState("");

  const getRandomColor = () => {
    const colors = [
      "#e2ec80", "#79dd5b", "#338dc2", "#ffbc6a", "#f28a7e",
      "#6f8fdb", "#6fd9b8", "#f59e42", "#b68df3", "#ff708b",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const filteredEvents = events.filter(
    (e) =>
      e.title.toLowerCase().includes(searchText.toLowerCase()) ||
      e.duration.toLowerCase().includes(searchText.toLowerCase()) ||
      e.type.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleCreate = () => setIsCreating(true);

  const handleUpdate = () => {
    if (!title || !duration || !type) {
      alert("Please fill all fields.");
      return;
    }
    setEvents([
      {
        title,
        duration,
        type,
        color: getRandomColor(),
      },
      ...events,
    ]);
    setTitle("");
    setDuration("");
    setType("");
    setIsCreating(false);
  };

  const handleInsert = (event: any) => {
    const link = `https://yourapp.com/event/${encodeURIComponent(
      event.title.toLowerCase().replace(/\s+/g, "-")
    )}`;

    const htmlBody = `
      <b>${event.title}</b><br/>
      ${event.duration} • ${event.type}<br/>
      <a href="${link}" target="_blank">${link}</a><br/><br/>
    `;

    if (window.Office && Office.context?.mailbox?.item?.body) {
      const body = Office.context.mailbox.item.body;

      if (body.setSelectedDataAsync) {
        body.setSelectedDataAsync(
          htmlBody,
          { coercionType: Office.CoercionType.Html },
          (result) => {
            if (result.status === Office.AsyncResultStatus.Succeeded) {
              console.log("Content inserted into mail body.");
            } else {
              console.error("Failed to insert content:", result.error.message);
            }
          }
        );
      } else {
        alert("Your Outlook version does not support content insertion.");
      }
    } else {
      alert("Office API is not available.");
    }
  };


  const PlusIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
  const ExternalLinkIcon = () => (
    <svg width="16" height="16" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M10 6h4v4" />
      <path d="M14 6l-6 6" />
      <path d="M5 5H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-1" />
    </svg>
  );
  const MoreIcon = () => (
    <svg width="16" height="16" fill="#333" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
  const CalendarIcon = () => (
    <svg width="16" height="16" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="3" y="4" width="10" height="9" rx="2" ry="2" />
      <line x1="3" y1="7" x2="13" y2="7" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
    </svg>
  );
  const MailIcon = () => (
    <svg width="16" height="16" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M2 5h12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" />
      <polyline points="2 5 8 10 14 5" />
    </svg>
  );
  const LinkIcon = () => (
    <svg width="16" height="16" fill="none" stroke="#333" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M7 7h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3z" />
      <path d="M9 9l4-4" />
    </svg>
  );

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      padding: 16,
      fontFamily: "Segoe UI, sans-serif",
      maxWidth: 500,
      margin: "auto",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    input: {
      width: "92%",
      padding: "8px 10px",
      marginBottom: 10,
      border: "1px solid #ccc",
      borderRadius: 6,
    },
    searchWrapper: {
      display: "flex",
      alignItems: "center",
      border: "1.5px solid #2575BB",
      borderRadius: 8,
      padding: "8px 10px",
      marginBottom: 20,
    },
    searchInput: {
      flex: 1,
      border: "none",
      outline: "none",
      fontSize: 14,
    },
    eventCard: {
      display: "flex",
      border: "1px solid #eee",
      borderRadius: 8,
      marginBottom: 12,
      boxShadow: "0 0 2px rgba(0,0,0,0.05)",
    },
    colorBar: {
      width: 6,
      borderRadius: "8px 0 0 8px",
    },
    eventContent: {
      flex: 1,
      padding: 12,
    },
    eventHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    eventTitle: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600,
      color: "#333",
    },
    eventDescription: {
      fontSize: 12,
      color: "#666",
      marginTop: 6,
    },
    eventActions: {
      display: "flex",
      gap: 12,
      marginTop: 12,
      alignItems: "center",
      fontSize: 14,
    },
    copyLinkGroup: {
      display: "flex",
      border: "1px solid #ccc",
      borderRadius: 4,
      overflow: "hidden",
    },
    copyBtn: {
      backgroundColor: "white",
      border: "none",
      padding: "4px 12px",
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 500,
    },
    linkBtn: {
      backgroundColor: "white",
      border: "none",
      borderLeft: "1px solid #ccc",
      padding: "4px 10px",
      cursor: "pointer",
    },
  };

  return (
    <>
      <NavigationArrows backPath="/emailsuggestions" />
      <div style={styles.container}>
        <div style={styles.header}>
          <h2>Event Types</h2>
          <span
            id="create"
            style={{ display: "flex", background: "#2575BB", color: "#fff", padding: "8px 16px", borderRadius: "7px", alignItems: "center", cursor: "pointer" }}
            onClick={isCreating ? handleUpdate : handleCreate}
          >
            {!isCreating && <PlusIcon />}
            {isCreating ? "Update" : "Create"}
          </span>
        </div>

        <div style={styles.searchWrapper}>
          <input
            style={styles.searchInput}
            type="text"
            placeholder="Search by title, type, or description..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {isCreating && (
          <>
            <input style={styles.input} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input style={styles.input} placeholder="Description" value={duration} onChange={(e) => setDuration(e.target.value)} />
            <input style={styles.input} placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
          </>
        )}

        {filteredEvents.map((event, idx) => (
          <div key={idx} style={styles.eventCard}>
            <div style={{ ...styles.colorBar, backgroundColor: event.color }} />
            <div style={styles.eventContent}>
              <div style={styles.eventHeader}>
                <h4 style={styles.eventTitle}>{event.title}</h4>
                <div style={{ display: "flex", gap: 8 }}>
                  <ExternalLinkIcon />
                  <MoreIcon />
                </div>
              </div>
              <p style={styles.eventDescription}>{event.duration} • {event.type}</p>
              <div style={styles.eventActions}>
                <CalendarIcon />
                <MailIcon />
                <span style={styles.copyLinkGroup}>
                  <button style={styles.copyBtn}>Copy link</button>
                  <button style={styles.linkBtn}><LinkIcon /></button>
                </span>
                <button
                  style={{
                    backgroundColor: "#0b7a0b",
                    border: "none",
                    borderRadius: 4,
                    padding: "4px 8px",
                    fontSize: 12,
                    cursor: "pointer",
                    color: "#fff",
                  }}
                  onClick={() => handleInsert(event)}
                >
                  Insert
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default EventTypes;

