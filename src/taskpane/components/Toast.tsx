const Toast: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 10, 
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#4BB543",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
};
