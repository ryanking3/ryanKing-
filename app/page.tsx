"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start text-left gap-6">
      {/* Bio Section */}
      <div className="space-y-3">
        <p className="text-lg">Hi, I'm Ryan King</p>
        <p className="text-lg">
          I study CS in Queen's University Belfast, and I like to program a lot.
        </p>
        <p className="text-lg">
          Always interested in working on cool projects, feel free to get in contact!
        </p>
        <p className="text-lg subtle">&gt; Stay blessed, always</p>
      </div>

      {/* Contact Section */}
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Email</h2>
        <p>
          <a href="mailto:ryannkingg1@gmail.com" className="underline hover:text-white">ryannkingg1@gmail.com</a>
        </p>
      </div>

      {/* Social Section */}
      <div className="space-y-2">
        <h2 className="font-bold text-lg">Social</h2>
        <ul className="space-y-1">
          <li>
            X: <a href="https://x.com/1c3yy" className="underline hover:text-white">@1c3yy</a>
          </li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/ryank1ng/" className="underline hover:text-white">@ryank1ng</a>
          </li>
          <li>
            LeetCode: <a href="https://leetcode.com/u/RyanKing123/" className="underline hover:text-white">@RyanKing123</a>
          </li>
          <li>
            Github: <a href="https://github.com/ryanking3" className="underline hover:text-white">@ryanking3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
