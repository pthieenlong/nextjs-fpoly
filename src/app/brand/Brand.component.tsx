type Props = {
  _id: string;
  url: string;
  alt: string;
};
export default function Brand({ _id, url, alt }: Props) {
  return (
    <div className="flex items-center justify-center p-4" key={_id}>
      <img
        src={url}
        alt={alt}
        className="max-h-12 sm:max-h-16 object-contain"
      />
    </div>
  );
}
