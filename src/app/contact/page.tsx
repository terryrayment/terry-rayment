export default function ContactPage() {
  return (
    <div className="py-[8px] max-w-[700px]">
      <div className="mb-[25px]">
        <div className="opacity-40 mb-[6px]">GENERAL INQUIRIES</div>
        <div className="space-y-[4px]">
          <a href="mailto:hello@terry-rayment.com" className="block">
            HELLO@TERRY-RAYMENT.COM
          </a>
        </div>
      </div>

      <div className="mb-[25px]">
        <div className="opacity-40 mb-[6px]">REPRESENTATION</div>
        <div className="space-y-[4px]">
          <div>EXECUTIVE PRODUCER</div>
          <div>
            <a href="mailto:ep@productionco.com">EP@PRODUCTIONCO.COM</a>
          </div>
          <div className="mt-[8px] opacity-40">US SALES</div>
          <div>
            <a href="mailto:us@productionco.com">US@PRODUCTIONCO.COM</a>
          </div>
          <div className="mt-[8px] opacity-40">UK SALES</div>
          <div>
            <a href="mailto:uk@productionco.com">UK@PRODUCTIONCO.COM</a>
          </div>
        </div>
      </div>

      <div className="mb-[25px]">
        <div className="opacity-40 mb-[6px]">SOCIAL</div>
        <div className="space-y-[4px]">
          <a
            href="https://instagram.com/terryrayment"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            INSTAGRAM
          </a>
          <a
            href="https://vimeo.com/terryrayment"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            VIMEO
          </a>
        </div>
      </div>

      <div>
        <div className="opacity-40 mb-[6px]">LOCATION</div>
        <div className="space-y-[4px]">
          <div>LOS ANGELES, CA</div>
        </div>
      </div>
    </div>
  );
}
