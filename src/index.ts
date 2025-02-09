import { Command } from "commander";
import chalk from "chalk";
import { createNestProject } from "./project-generator.js";

const program = new Command();

program
  .name("hexagonal-template-cli")
  .version("1.0.0")
  .description("CLI to generate a NestJS project with a hexagonal architecture")
  .argument("<project-name>", "Name of the NestJS project")
  .action(async (projectName) => {
    console.log(chalk.blue(`🚀 Creating NestJS project: ${projectName}...`));
    await createNestProject(projectName);
  });

program.parse(process.argv);
