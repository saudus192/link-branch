export default function GradientBackground({ children }) {
  return (
    <div style={styles.wrapper}>
      {children}
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    backgroundColor: "#c9a97e",
    backgroundImage: `
      radial-gradient(circle at 15% 15%, #b6aed6 0%, rgba(182,174,214,0) 45%),
      radial-gradient(circle at 85% 10%, #c9c3dd 0%, rgba(201,195,221,0) 40%),
      radial-gradient(circle at 5% 55%, #e9b448 0%, rgba(233,180,72,0) 45%),
      radial-gradient(circle at 90% 60%, #d97b3c 0%, rgba(217,123,60,0) 50%),
      radial-gradient(circle at 30% 90%, #cf7a3b 0%, rgba(207,122,59,0) 45%),
      radial-gradient(circle at 75% 95%, #b98a63 0%, rgba(185,138,99,0) 45%)
    `,
    backgroundBlendMode: "screen, screen, normal, normal, normal, normal",
  },
};