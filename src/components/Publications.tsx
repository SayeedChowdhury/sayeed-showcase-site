
import React from "react";

const publications = [
  {
    title: "OPEL: Optimal Transport Guided ProcedurE Learning",
    authors: "S. S. Chowdhury, S. Chandra and K. Roy",
    venue: "NeurIPS",
    year: "2024"
  },
  {
    title: "Towards Syntactical Understanding of Images",
    authors: "S. S. Chowdhury, S. Chandra, and K. Roy",
    venue: "IEEE Access",
    year: "2024"
  },
  {
    title: "Segmented Recurrent Transformer: An Efficient Sequence-to-Sequence Model",
    authors: "Y. Long, S. S. Chowdhury, and K. Roy",
    venue: "Empirical Methods in Natural Language Processing (EMNLP)",
    year: "2023"
  },
  {
    title: "Towards Ultra Low Latency Spiking Neural Networks for Vision and Sequential Tasks Using Temporal Pruning",
    authors: "S. S. Chowdhury, N. Rathi, and K. Roy",
    venue: "European Conference on Computer Vision (ECCV)",
    year: "2022"
  },
  {
    title: "DCT-SNN: Using DCT to Distribute Spatial Information over Time for Learning Low-Latency Spiking Neural Networks",
    authors: "S. S. Chowdhury*, I. Garg*, and K. Roy",
    venue: "International Conference on Computer Vision (ICCV)",
    year: "2021"
  },
  {
    title: "Real Time Robust Heart Rate Estimation from Wrist-type PPG Signals Using Multiple Reference Adaptive Noise Cancellation",
    authors: "S. S. Chowdhury et al.",
    venue: "IEEE Journal of Biomedical and Health Informatics. vol. 22",
    year: "2016"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="bg-portfolio-lightgray">
      <div className="container">
        <h2 className="section-heading">Publications</h2>
        
        <div className="grid grid-cols-1 gap-6">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in"
            >
              <h3 className="text-xl font-bold text-portfolio-darkblue mb-2">{pub.title}</h3>
              <p className="text-portfolio-gray mb-2">{pub.authors}</p>
              <div className="flex justify-between">
                <p className="text-portfolio-blue font-medium">{pub.venue}</p>
                <p className="text-portfolio-gray">{pub.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
