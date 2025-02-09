import { execa } from "execa";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

export async function createNestProject(projectName: string) {
  const projectPath = path.join(process.cwd(), projectName);

  console.log(chalk.green(`📂 Creating project directory: ${projectPath}`));
  fs.ensureDirSync(projectPath);

  console.log(chalk.yellow("📦 Initializing NestJS..."));
  //await execa("npx", ["@nestjs/cli", "new", projectName, "--package-manager", "npm"], { stdio: "inherit" });

  console.log(chalk.green("✅ NestJS project created! Removing default folders..."));

  // Eliminar carpetas "src" y "test"
  // const srcPath = path.join(projectPath, "src");
  // const testPath = path.join(projectPath, "test");

  // if (fs.existsSync(srcPath)) {
  //   fs.removeSync(srcPath);
  // }
  // if (fs.existsSync(testPath)) {
  //   fs.removeSync(testPath);
  // }

  console.log(chalk.green("📂 Creating custom folder structure..."));
  // Define la estructura de carpetas personalizada
  const folders = [
    "src/core/application",
    "src/core/application/errors",
    "src/core/application/interfaces",
    "src/core/application/services",
    "src/core/domain/entities",
    "src/core/domain/ports/inbound",
    "src/core/domain/ports/outbound",
    "src/core/domain/services",
    "src/infrastructure/adapters",
    "src/infrastructure/database/entities",
    "src/infrastructure/http-server/controllers",
    "src/infrastructure/http-server/dto",
    "src/shared",
  ];

  // 📂 Ruta del archivo a modificar
  const filePath = path.join(process.cwd(), "src/modules/http-server.module.ts");
  // Leer el contenido del archivo
  let content = fs.readFileSync(filePath, "utf-8");
  console.log(content);

  for (const folder of folders) {
    const folderPath = path.join(projectPath, folder);
    fs.ensureDirSync(folderPath);
    console.log(chalk.cyan(`📂 Created: ${folderPath}`));
  }

  console.log(chalk.green("🎉 Project setup complete!"));
}