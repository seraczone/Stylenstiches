import { motion } from "framer-motion";
import { fadeUp, inView } from "@/lib/animations";

interface SizeChartData {
  [key: string]: {
    [key: string]: string | number;
  };
}

const sizeCharts: { [category: string]: SizeChartData } = {
  abayas: {
    size: ["Free", "54", "56", "58", "60"],
    bust: ["96cm", "108cm", "113cm", "118cm", "123cm"],
    length: ["153cm", "155cm", "157cm", "159cm", "161cm"],
  },
  kaftans: {
    size: ["XS", "S", "M", "L", "XL"],
    bust: ["86cm", "91cm", "96cm", "101cm", "106cm"],
    waist: ["66cm", "71cm", "76cm", "81cm", "86cm"],
    length: ["140cm", "142cm", "144cm", "146cm", "148cm"],
  },
  "occasion-dresses": {
    size: ["XS", "S", "M", "L", "XL"],
    bust: ["84cm", "89cm", "94cm", "99cm", "104cm"],
    waist: ["64cm", "69cm", "74cm", "79cm", "84cm"],
    hips: ["94cm", "99cm", "104cm", "109cm", "114cm"],
  },
};

export function SizeChart({ category = "abayas" }: { category?: string }) {
  const chart = sizeCharts[category] || sizeCharts.abayas;
  const measurements = Object.keys(chart).filter((k) => k !== "size");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      variants={fadeUp}
      className="w-full"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]" style={{ color: "var(--ink)" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--linen)" }}>
              {Object.keys(chart).map((key) => (
                <th
                  key={key}
                  className="p-3 text-left font-semibold capitalize"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(chart[Object.keys(chart)[0]] as unknown[]).map((_, index) => (
              <tr key={index} style={{ borderBottom: "1px solid var(--linen)" }}>
                {Object.keys(chart).map((key) => (
                  <td key={`${key}-${index}`} className="p-3">
                    {(chart[key] as unknown[])[index]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--warm-white)" }}>
        <h4
          className="text-[12px] font-semibold mb-2"
          style={{ fontFamily: "var(--font-body)", color: "var(--ink)" }}
        >
          Need Help with Sizing?
        </h4>
        <p className="text-[11px]" style={{ color: "var(--warm-gray)", lineHeight: 1.6 }}>
          Our size guide is approximate. For a perfect fit, we recommend:
        </p>
        <ul className="text-[11px] mt-2 space-y-1" style={{ color: "var(--warm-gray)" }}>
          <li>• Take measurements with a soft measuring tape</li>
          <li>• Measure loosely without pulling the tape</li>
          <li>• Compare your measurements to our chart</li>
          <li>
            • Still unsure? Chat with us on WhatsApp +2347015507217 for personalized sizing help
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
