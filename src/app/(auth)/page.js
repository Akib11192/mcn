import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div>welcome to the mcn network , where every kb count</div>
      <Link href="/login">login</Link>
      <Link href="/register">register</Link>
    </div>
  );
};

export default page;
