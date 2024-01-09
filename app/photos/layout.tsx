export default function ParallellLayout({
  children,
  viewer,
}: {
  children: React.ReactNode;
  viewer: React.ReactNode;
}) {

  return (
    <>
      <div className='border-black border-2 border-solid'>{children}</div>
      <br />
      <div>{viewer}</div>
    </>
  );
}
