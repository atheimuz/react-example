export const wrapper = ({ indent }) => ({
    padding: `30px ${indent.horizontal} 40px`,
});

export const title = {
    fontSize: "20px",
    fontWeight: "bold",
};

export const input = ({ color }) => ({
    width: "100%",
    height: "50px",
    marginTop: "20px",
    border: "none",
    borderBottom: `2px solid ${color.active}`,
    fontSize: "24px",
    background: "transparent",
    outline: "none",
});

export const btn = ({ color }) => ({
    width: "100%",
    height: "50px",
    marginTop: "20px",
    borderRadius: "4px",
    fontSize: "20px",
    backgroundColor: color.active,
    color: "white",

    "&:disabled": {
        backgroundColor: "gray",
    },
});
