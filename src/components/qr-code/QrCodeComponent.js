import QRCode from "qrcode.react";

const QrCodeComponent = () => {
  return (
    <>
      <QRCode
        size="160"
        value="www.google.com"
        bgColor="black"
        fgColor="white"
        level="L"
        includeMargin="true"
        imageSettings={{
          src:
            "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
          height: 20,
          width: 20,
          excavate: true,
        }}
      />
    </>
  );
};

export default QrCodeComponent;
