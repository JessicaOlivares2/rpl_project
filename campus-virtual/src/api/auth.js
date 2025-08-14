// Mock de usuarios
const usersDB = {
  'alumno@3A.com': {
    password: '123',
    role: 'student',
    nombre: 'Ana López',
    curso: '3A'
  },
  'profesor@math.com': {
    password: '456',
    role: 'teacher',
    nombre: 'Carlos Ruiz',
    materias: ['Matemáticas', 'Física']
  }
}

export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = usersDB[email]
      if (user && user.password === password) {
        resolve(user)
      } else {
        reject(new Error('Credenciales inválidas'))
      }
    }, 500)
  })
}