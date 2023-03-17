const dynamicImport = async (fileName: string, extension?: string) => {
  const { default: path } = await import(`../assets/${fileName}.${extension || 'svg'}?url`);
  return path;
};

export default dynamicImport;
