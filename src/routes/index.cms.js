export async function get(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ title: "Välkommen igen" }));
}