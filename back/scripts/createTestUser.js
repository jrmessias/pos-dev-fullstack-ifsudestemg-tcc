const bcrypt = require('bcryptjs');
const { User } = require('../models');

async function main() {
    const email = 'student@test.local';
    const existing = await User.findOne({ where: { email } });
    if (existing) {
        console.log('User already exists:', email);
        return;
    }

    const passwordHash = await bcrypt.hash('password', 10);

    const user = await User.create({
        name: 'Test Student',
        email,
        password: passwordHash,
        role: 'student',
    });

    console.log('Created user id:', user.id);
}

main().then(() => process.exit(0)).catch((err) => { console.error(err); process.exit(1); });
