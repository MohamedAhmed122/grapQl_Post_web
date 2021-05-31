import { CircularProgress, Backdrop } from "@material-ui/core";

export default function Loading({ size = 50, color = "primary" }) {
  return (
    <Backdrop style={{ zIndex: 50, backgroundColor: "" }} open={true}>
      <CircularProgress color={color} size={size} />
    </Backdrop>
  );
}
