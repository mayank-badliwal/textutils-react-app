

export default function Theme({ currentTheme, changeTheme }) {
  return (
    <div style={{ margin: "20px" }}>
      <p>This is the {currentTheme} theme.</p>

      {Object.keys(themes).map((theme) => (
        <button
          key={theme}
          onClick={() => changeTheme(theme)}
          style={{
            marginRight: "10px",
            padding: "10px 15px",
            border: "none",
            cursor: "pointer",
            borderRadius: "8px",
            background: themes[theme].background,
            color: themes[theme].color,
          }}
        >
          {theme}
        </button>
      ))}
    </div>
  );
}

const themes = {
  light: { background: "#ffffff", color: "#000000" },
  dark: { background: "#000000", color: "#ffffff" },
  blue: { background: "#001f3f", color: "#7FDBFF" },
  green: { background: "#2fba3fff", color: "#001f3f" },
};
