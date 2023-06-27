export default function Overlay({ hide }: any) {
  return <div onClick={() => hide()} className="overlay-backdrop"></div>;
}
