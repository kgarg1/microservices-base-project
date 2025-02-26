const express = require("express");
const httpProxy = require("http-proxy");

const app = express();
const proxy = httpProxy.createProxyServer();

proxy.on("error", (err, req, res) => {
    console.error("Proxy error:", err);
    res.status(500).json({ message: "API Gateway Error", error: err.message });
});

app.use("/auth", (req, res) => proxy.web(req, res, { target: "http://auth-service:5000" }));
app.use("/product", (req, res) => { 
    proxy.web(req, res, { target: "http://product-service:5001" }, (err) => {
        if (err) {
            console.error("Proxy error:", err);
            res.status(500).send("Error forwarding request");
        }
    });
});

app.listen(3030, () => console.log("API Gateway running on port 3030"));
