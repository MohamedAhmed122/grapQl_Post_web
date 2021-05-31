import "./styleCustomButton.css";

import CircularProgress from "@material-ui/core/CircularProgress";

export default function CustomButton({
  width = 400,
  loading = false,
  disabled = false,
  title,
  onClick,
  ...otherProps
}) {
  return (
    <div className="flex_center" style={{ marginTop: 20, padding: 10 }}>
      <button
        disabled={disabled}
        className={disabled ? "btnDisabled  primaryBtn" : "primaryBtn"}
        onClick={onClick}
        {...otherProps}
      >
        {loading ? (
          <CircularProgress size={20} style={{ color: "white" }} />
        ) : (
          title
        )}
      </button>
    </div>
  );
}
