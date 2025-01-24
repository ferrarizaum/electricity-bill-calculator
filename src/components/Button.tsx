type ButtonProps = {
  text: string;
  color: string;
  onClick?: () => void;
};

export const Button = ({ text, onClick, color }: ButtonProps) => {
  return (
    <>
      <button
        style={{
          backgroundColor: color,
          border: "none",
          color: "white",
          padding: "12px 24px",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};
