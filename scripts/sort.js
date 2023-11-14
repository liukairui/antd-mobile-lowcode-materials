const fs = require('fs');
const path = require('path');

const folderPath = path.resolve(__dirname, '../lowcode');

const subFolders = fs.readdirSync(folderPath);

subFolders.forEach((subFolder) => {
  const subFolderPath = path.join(folderPath, subFolder);
  const stat = fs.statSync(subFolderPath);
  if (stat.isDirectory()) {
    const metaPath = path.join(subFolderPath, 'meta.ts');
    try {
      const fileContent = fs.readFileSync(metaPath, 'utf-8');
      const regex = /IPublicTypeComponentMetadata\s*=\s*{([\s\S]*?)};[\s\S]*const\s+snippets:\s*IPublicTypeSnippet\[\]\s*=\s*\[([\s\S]*?)]/;
      const matches = fileContent.match(regex);
      if (matches) {
        const createObject = new Function(`return {${matches[1]}}`);
        const object = createObject();
        if (Array.isArray(object.configure.props)) {
          object.configure.props.sort((i, j) => (i.name > j.name ? 1 : -1));
          object.configure.props.forEach((i) => {
            if (i.title) {
              if (typeof i.title.tip === 'string') {
                i.title.tip = i.title.label;
              } else {
                i.title.tip = i.title.tip ?? i.title.label;
              }
            }
          });
          const serializedObject = JSON.stringify(
            object,
            (_, value) => {
              if (value === undefined) {
                return '__undefined__';
              }
              return value;
            },
            2
          );
          const newFileContent = fileContent.replace(matches[1], serializedObject.slice(1, -1));
          const finalFileContent = newFileContent.replace(/"__undefined__"/g, 'undefined');
          fs.writeFileSync(metaPath, finalFileContent);
        }
      }
    } catch (error) {
      console.error(`处理文件 ${metaPath} 时发生异常： ${error.message}`);
      return;
    }
  }
});
