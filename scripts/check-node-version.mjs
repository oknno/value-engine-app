const requiredMajor = 18;
const currentVersion = process.version;
const currentMajor = Number.parseInt(currentVersion.slice(1).split('.')[0], 10);

if (currentMajor !== requiredMajor) {
  console.error(
    `Versão do Node detectada: ${currentVersion}. Use Node 18.x para este projeto.`
  );
  process.exit(1);
}
