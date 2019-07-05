import Router from 'next/router';
import Link from 'next/link';
export default ()=>
    <div>
        <span onClick={()=>{Router.push('/about')}}>router</span>
        <br/>
        <Link href="/about">
            <a>link</a>
        </Link>
    </div>
