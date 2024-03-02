import Image from "next/image";

const data: Array<{
  name: string;
}> = [
  {
    name: "GitHub",
  },
  {
    name: "Frontend Mentor",
  },
  {
    name: "LinkedIn",
  },
  {
    name: "Twitter",
  },
  {
    name: "Instagram",
  },
];

export default function Home() {
  return (
    <div className="card">
      <header>
        <div className="avatar">
          <Image fill src="/assets/images/avatar-jessica.jpeg" alt="avatar" />
        </div>
        <div className="name-info">
          <h1>Jessica Randall</h1>
          <p>London, United Kingdom</p>
        </div>
        <p>"Front-end developer and avid render."</p>
      </header>
      <div className="btn-s">
        {data.map((v, i) => (
          <div key={i} className="btn">
            {v.name}
          </div>
        ))}
      </div>
    </div>
  );
}
