import Link from 'next/link';

export default function Profile() {
  return (
    <div className='bg-slate-400 border-black-500'>
      <h1>This is Profile Page</h1>

      {/* 여기서 aaa를 next는 route에서 찾는다.(App router니까 app밑에서 찾는다.)
        그 app/aaa/page.tsx가 서버 컴포넌트라면 서버로 한 번은 가고, use client라도 html, js는 받아와야지-내 브라우저에는 일단 없으니까. */}
      {/* 근데 여기서 aaa는 일단 /parallel만 들어갔는데도, @login/aaa를 다 부른다. */}
      {/* 서버든 클라이언트 컴포넌트는, 불렀을 때 받아오는 게 아니라, layout의 들어갈 수 있는 애들은 다 읽는다, */}
      {/* 여기서 href가 intercept router. */}
      {/* 주소창만 바뀌고 서버로 가진 않는다. 클라이언트에서 보여줌 */}
      {/* 근데 새로고침하거나 /parallel/aaa로 바로 접근하면 서버에서 받아오는 것. */}
      <Link href='/parallel/aaa' className='bg-green-200'>
        AAA
      </Link>
    </div>
  );
}
