export default function AboutPage() {
  return (
    <div className="py-[8px] max-w-[700px]">
      <div className="mb-[25px]">
        <div className="opacity-40 mb-[6px]">ABOUT</div>
        <div className="space-y-[15px] normal-case" style={{ fontSize: "13px", lineHeight: "22px" }}>
          <p>
            Terry Rayment is a director based in Los Angeles, working across
            commercial, branded content, music videos, and short films.
          </p>
          <p>
            With a distinctive visual language that blends cinematic
            storytelling with striking imagery, Terry has collaborated with
            some of the world&apos;s most recognized brands including Nike, Apple,
            Adidas, Samsung, and The North Face.
          </p>
          <p>
            His work is characterized by a meticulous attention to composition,
            light, and movement — finding beauty in both the monumental and
            the intimate.
          </p>
        </div>
      </div>

      <div className="mb-[25px]">
        <div className="opacity-40 mb-[6px]">REPRESENTATION</div>
        <div className="space-y-[4px]">
          <div>PRODUCTION COMPANY NAME</div>
          <div className="opacity-40">LOS ANGELES / NEW YORK</div>
        </div>
      </div>

      <div>
        <div className="opacity-40 mb-[6px]">RECOGNITION</div>
        <div className="space-y-[4px]">
          <div>CANNES LIONS — GOLD</div>
          <div>D&AD — PENCIL</div>
          <div>ONE SHOW — MERIT</div>
          <div>CICLOPE — SHORTLIST</div>
        </div>
      </div>
    </div>
  );
}
