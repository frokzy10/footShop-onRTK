const fs = require('fs');
const path = require('path');

const jsonServer = require('json-server');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.post('/login', (req, res, next) => {
    try {
        const {username, password} = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const {users = []} = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );
        if (userFromBd) {
            if (userFromBd.password === password || userFromBd.username === username) {
                return res.json(userFromBd)
            } else {
                return alert("Неправильный логин или пароль")
            }
        } else {
            return res.status(403).json({message: "User not found"})
        }
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
});

server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 300);
    });
    next();
});
//
server.use(router);

// запуск сервера
server.listen(3500, () => {
    console.log('server is running on 3500 port');
});