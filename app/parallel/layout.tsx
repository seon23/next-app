export default function ParallellLayout({
  children,
  login,
  profile,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  profile: React.ReactNode;
}) {
  const didLogin = true;
  // const didLogin = false;

  return didLogin ? (
    <>
      <div className='border-black border-2 border-solid'>{children}</div>
      <br />
      <div>{login}</div>
      <div>{profile}</div>
    </>
  ) : (
    login
  );
}
