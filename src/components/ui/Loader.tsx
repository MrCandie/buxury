import React from "react";
import LoadingBar from "react-top-loading-bar";

export default function Loader({ setProgress, progress }: any) {
  return (
    <LoadingBar
      color="#2BA2DA"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
}
