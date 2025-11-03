module.exports = {
  apps : [
    {
      name: "mern-backend",
      script: "npm",
      args: "start",
      cwd: "/home/ubuntu/mern-app/server",
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
}