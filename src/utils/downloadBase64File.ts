export const downloadBase64File = (
  base64: string,
  fileName: string,
  mimeType = 'application/pdf',
) => {
  if (!base64) {
    throw new Error('The API returned an empty file.');
  }

  const binaryContent = window.atob(base64.replace(/\s/g, ''));
  const bytes = Uint8Array.from(binaryContent, character =>
    character.charCodeAt(0),
  );
  const fileUrl = URL.createObjectURL(new Blob([bytes], { type: mimeType }));
  const downloadLink = document.createElement('a');

  downloadLink.href = fileUrl;
  downloadLink.download = fileName;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(fileUrl);
};
