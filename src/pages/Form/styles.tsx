export const wrapper = ({ indent }) => ({
    display: "flex",
    margin: "0 -15px",
    padding: `${indent.horizontal}`,
});

export const panel = {
    flex: 1,
    margin: "0 15px",
    padding: "40px 20px",
    borderRadius: "10px",
    boxShadow: `1px 1px 2px 1px rgba(0, 0, 0, 0.1);`,
};
