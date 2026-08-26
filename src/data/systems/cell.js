export const cellSystem = {
  id: "cell",
  name: "Cell Biology",


  organs: [
    {
      id: "cell",
      name: "Cell",
      modelPath: "models/cell/",
      modelFile: "cell.glb",

      parts: [

        {
          id: "cell-membrane",
          name: "Cell Membrane",
          modelPath: "models/cell/",
          modelFile: "cell_membrane.glb",

          notes: {
            anatomy: `
              <h2>Cell Membrane Anatomy</h2>

              <h3>Overview</h3>
              <p>
                The cell membrane, also called the plasma membrane, is the selectively
                permeable boundary surrounding the cell. It separates the intracellular
                environment from the extracellular environment while allowing controlled
                exchange of substances and information.
              </p>

              <p>
                The membrane is a dynamic structure rather than a rigid wall. Its
                components can move laterally within the lipid bilayer, allowing the
                membrane to change shape, participate in signaling, form vesicles,
                establish cell-cell interactions, and respond to mechanical and chemical
                stimuli.
              </p>

              <h3>Fluid Mosaic Model</h3>
              <p>
                The plasma membrane is described by the fluid mosaic model. Lipids form
                the fundamental bilayer, while proteins are embedded within or associated
                with the membrane. Carbohydrate-containing molecules are concentrated
                mainly on the extracellular surface.
              </p>

              <h3>Major Components</h3>
              <ul>
                <li><strong>Phospholipids:</strong> form the basic lipid bilayer.</li>
                <li><strong>Cholesterol:</strong> regulates membrane fluidity, permeability, and stability.</li>
                <li><strong>Membrane proteins:</strong> function as receptors, channels, transporters, enzymes, and structural components.</li>
                <li><strong>Glycoproteins:</strong> participate in cell recognition, adhesion, and signaling.</li>
                <li><strong>Glycolipids:</strong> contribute to membrane identity and cell recognition.</li>
              </ul>

              <h3>Phospholipid Bilayer</h3>
              <p>
                Phospholipids are amphipathic molecules containing a hydrophilic
                phosphate-containing head and hydrophobic fatty-acid tails.
              </p>

              <p>
                In an aqueous environment, phospholipids spontaneously organize into
                a bilayer with the hydrophilic heads facing the aqueous environments
                and the hydrophobic tails directed toward the interior of the membrane.
              </p>

              <h3>Membrane Proteins</h3>
              <ul>
                <li>Integral membrane proteins</li>
                <li>Transmembrane proteins</li>
                <li>Peripheral membrane proteins</li>
                <li>Lipid-anchored proteins</li>
              </ul>

              <h3>Glycocalyx</h3>
              <p>
                The extracellular surface of the plasma membrane contains a carbohydrate-rich
                layer known as the glycocalyx. It consists largely of carbohydrate chains
                attached to membrane proteins and lipids.
              </p>

              <p>
                The glycocalyx contributes to cell recognition, protection, adhesion,
                receptor interactions, and immune identification.
              </p>

              <h3>Membrane Asymmetry</h3>
              <p>
                The two layers of the plasma membrane are chemically different.
                Phospholipids such as phosphatidylserine are normally concentrated
                on the cytoplasmic leaflet, whereas glycolipids are predominantly
                located on the extracellular leaflet.
              </p>

              <h3>Membrane Fluidity</h3>
              <p>
                Membrane fluidity depends on fatty-acid composition, temperature,
                cholesterol concentration, and the degree of saturation of membrane
                lipids.
              </p>
            `,

            physiology: `
              <h2>Cell Membrane Physiology</h2>

              <h3>Selective Permeability</h3>
              <p>
                The plasma membrane selectively controls movement of substances between
                the intracellular and extracellular compartments.
              </p>

              <h3>Passive Transport</h3>
              <ul>
                <li>Simple diffusion</li>
                <li>Facilitated diffusion</li>
                <li>Osmosis</li>
              </ul>

              <h3>Active Transport</h3>
              <ul>
                <li>Primary active transport</li>
                <li>Secondary active transport</li>
              </ul>

              <h3>Primary Active Transport</h3>
              <p>
                Primary active transport directly uses cellular energy, usually ATP,
                to move substances against their electrochemical gradients.
              </p>

              <p>
                An important example is the sodium-potassium ATPase, which transports
                sodium out of the cell and potassium into the cell.
              </p>

              <h3>Secondary Active Transport</h3>
              <p>
                Secondary active transport uses the energy stored in an existing
                electrochemical gradient to transport another substance.
              </p>

              <ul>
                <li>Symport</li>
                <li>Antiport</li>
              </ul>

              <h3>Endocytosis</h3>
              <p>
                Endocytosis allows cells to internalize extracellular material through
                membrane invagination and vesicle formation.
              </p>

              <ul>
                <li>Phagocytosis</li>
                <li>Pinocytosis</li>
                <li>Receptor-mediated endocytosis</li>
              </ul>

              <h3>Exocytosis</h3>
              <p>
                Exocytosis allows intracellular vesicles to fuse with the plasma
                membrane and release their contents into the extracellular space.
              </p>

              <h3>Cell Signaling</h3>
              <p>
                Membrane receptors detect extracellular signals including hormones,
                neurotransmitters, growth factors, cytokines, and other signaling
                molecules.
              </p>

              <h3>Membrane Potential</h3>
              <p>
                Differences in ion concentration across the plasma membrane generate
                an electrical potential known as the membrane potential.
              </p>

              <h3>Cell Adhesion</h3>
              <p>
                Membrane proteins participate in attachment of cells to neighboring
                cells and to the extracellular matrix.
              </p>
            `,

            biochemistry: `
              <h2>Cell Membrane Biochemistry</h2>

              <h3>Membrane Lipids</h3>
              <p>
                Major membrane lipids include phosphoglycerides, sphingolipids,
                cholesterol, and glycolipids.
              </p>

              <h3>Phospholipid Metabolism</h3>
              <p>
                Phospholipids undergo continuous synthesis, remodeling, degradation,
                and redistribution. Their fatty-acid composition influences membrane
                fluidity and signaling.
              </p>

              <h3>Cholesterol</h3>
              <p>
                Cholesterol is inserted between phospholipid molecules and helps
                regulate membrane permeability and fluidity.
              </p>

              <h3>Membrane Enzymes</h3>
              <p>
                Numerous enzymes are associated with the plasma membrane. These include
                ATPases, phospholipases, kinases, phosphatases, and enzymes involved
                in extracellular signaling.
              </p>

              <h3>Signal Transduction</h3>
              <p>
                Membrane receptors activate intracellular biochemical pathways through
                second messengers and protein phosphorylation.
              </p>

              <ul>
                <li>cAMP</li>
                <li>cGMP</li>
                <li>IP3</li>
                <li>DAG</li>
                <li>Intracellular calcium</li>
              </ul>
            `,

            pathology: `
              <h2>Cell Membrane Pathology</h2>

              <h3>Loss of Membrane Integrity</h3>
              <p>
                Severe cellular injury can damage the plasma membrane, causing leakage
                of intracellular contents and loss of cellular homeostasis.
              </p>

              <h3>Ion Gradient Failure</h3>
              <p>
                Failure of membrane transport systems can disrupt sodium, potassium,
                calcium, chloride, and other ion gradients.
              </p>

              <h3>Membrane Receptor Disorders</h3>
              <ul>
                <li>Receptor mutations</li>
                <li>Receptor deficiency</li>
                <li>Abnormal receptor activation</li>
                <li>Defective signal transduction</li>
              </ul>

              <h3>Membrane Transport Disorders</h3>
              <p>
                Genetic or acquired abnormalities of membrane transporters and channels
                can produce significant disease.
              </p>
            `
          }
        },

        {
          id: "nucleus",
          name: "Nucleus",
          modelPath: "models/cell/",
          modelFile: "nucleus.glb",

          notes: {
            anatomy: `
              <h2>Nucleus Anatomy</h2>

              <p>
                The nucleus is the principal genetic control center of the eukaryotic
                cell. It contains most of the cell's DNA and provides a specialized
                environment for DNA replication, transcription, RNA processing, and
                genome organization.
              </p>

              <h3>Major Components</h3>
              <ul>
                <li><strong>Nuclear envelope</strong></li>
                <li><strong>Nuclear pores</strong></li>
                <li><strong>Nucleoplasm</strong></li>
                <li><strong>Chromatin</strong></li>
                <li><strong>Nucleolus</strong></li>
                <li><strong>Nuclear lamina</strong></li>
              </ul>

              <h3>Nuclear Envelope</h3>
              <p>
                The nuclear envelope consists of two lipid membranes separated by
                the perinuclear space.
              </p>

              <h3>Nuclear Pore Complexes</h3>
              <p>
                Nuclear pore complexes regulate movement of proteins, RNA, ribosomal
                subunits, and other macromolecules between the nucleus and cytoplasm.
              </p>

              <h3>Chromatin</h3>
              <p>
                Chromatin consists primarily of DNA associated with histone and
                non-histone proteins.
              </p>

              <ul>
                <li>Euchromatin</li>
                <li>Heterochromatin</li>
              </ul>

              <h3>Nucleolus</h3>
              <p>
                The nucleolus is a specialized nuclear region responsible primarily
                for ribosomal RNA synthesis and ribosomal subunit assembly.
              </p>
            `,

            physiology: `
              <h2>Nucleus Physiology</h2>

              <h3>Gene Regulation</h3>
              <p>
                The nucleus controls cellular activity largely through regulation
                of gene expression.
              </p>

              <h3>DNA Replication</h3>
              <p>
                Nuclear DNA is replicated before cell division so that daughter cells
                can receive genetic information.
              </p>

              <h3>Transcription</h3>
              <p>
                DNA sequences are transcribed into RNA by RNA polymerases.
              </p>

              <h3>RNA Processing</h3>
              <ul>
                <li>5' capping</li>
                <li>RNA splicing</li>
                <li>3' polyadenylation</li>
                <li>RNA editing</li>
              </ul>

              <h3>Nuclear Transport</h3>
              <p>
                Nuclear localization signals and nuclear export signals regulate
                movement of proteins and RNA through nuclear pores.
              </p>
            `,

            biochemistry: `
              <h2>Nucleus Biochemistry</h2>

              <h3>DNA</h3>
              <p>
                Nuclear DNA stores genetic information in the sequence of nucleotides
                organized into chromosomes.
              </p>

              <h3>Histones</h3>
              <p>
                Histone proteins organize DNA into nucleosomes and contribute to
                regulation of chromatin accessibility.
              </p>

              <h3>Epigenetics</h3>
              <ul>
                <li>DNA methylation</li>
                <li>Histone acetylation</li>
                <li>Histone methylation</li>
                <li>Chromatin remodeling</li>
              </ul>

              <h3>RNA Polymerases</h3>
              <p>
                RNA polymerases catalyze transcription of DNA into RNA.
              </p>
            `,

            pathology: `
              <h2>Nucleus Pathology</h2>

              <ul>
                <li>DNA mutations</li>
                <li>Chromosomal abnormalities</li>
                <li>DNA repair defects</li>
                <li>Abnormal chromatin organization</li>
                <li>Nuclear envelope disorders</li>
                <li>Abnormal gene expression</li>
                <li>Neoplastic transformation</li>
              </ul>
            `
          }
        },

        {
          id: "mitochondrion",
          name: "Mitochondrion",
          modelPath: "models/cell/",
          modelFile: "mitochondria.glb",

          notes: {
            anatomy: `
              <h2>Mitochondrion Anatomy</h2>

              <p>
                Mitochondria are double-membrane organelles responsible for major
                aspects of cellular energy metabolism. They are particularly abundant
                in cells with high energy requirements.
              </p>

              <ul>
                <li><strong>Outer mitochondrial membrane</strong></li>
                <li><strong>Intermembrane space</strong></li>
                <li><strong>Inner mitochondrial membrane</strong></li>
                <li><strong>Cristae</strong></li>
                <li><strong>Mitochondrial matrix</strong></li>
                <li><strong>Mitochondrial DNA</strong></li>
              </ul>

              <h3>Outer Membrane</h3>
              <p>
                The outer mitochondrial membrane surrounds the organelle and contains
                channels that permit passage of relatively small molecules and ions.
              </p>

              <h3>Inner Membrane</h3>
              <p>
                The inner membrane is highly selective and contains the electron
                transport chain and ATP synthase.
              </p>

              <h3>Cristae</h3>
              <p>
                Cristae are folds of the inner membrane that increase the surface
                area available for oxidative phosphorylation.
              </p>

              <h3>Matrix</h3>
              <p>
                The matrix contains enzymes involved in the citric acid cycle,
                mitochondrial DNA, mitochondrial ribosomes, and other metabolic
                machinery.
              </p>
            `,

            physiology: `
              <h2>Mitochondrion Physiology</h2>

              <ul>
                <li>ATP production</li>
                <li>Oxidative phosphorylation</li>
                <li>Fatty-acid oxidation</li>
                <li>Calcium handling</li>
                <li>Apoptosis</li>
                <li>Reactive oxygen species signaling</li>
                <li>Metabolic regulation</li>
              </ul>

              <h3>ATP Production</h3>
              <p>
                Mitochondria generate ATP primarily through oxidative phosphorylation.
              </p>

              <h3>Calcium Regulation</h3>
              <p>
                Mitochondria can take up and release calcium and therefore participate
                in intracellular calcium signaling and metabolic regulation.
              </p>
            `,

            biochemistry: `
              <h2>Mitochondrion Biochemistry</h2>

              <h3>Citric Acid Cycle</h3>
              <p>
                Acetyl-CoA enters the citric acid cycle in the mitochondrial matrix.
                The cycle generates NADH and FADH2, which provide electrons for the
                respiratory chain.
              </p>

              <h3>Electron Transport Chain</h3>
              <p>
                Electrons pass through respiratory complexes located in the inner
                mitochondrial membrane.
              </p>

              <ul>
                <li>Complex I</li>
                <li>Complex II</li>
                <li>Complex III</li>
                <li>Complex IV</li>
              </ul>

              <h3>Oxidative Phosphorylation</h3>
              <p>
                Electron transport drives proton pumping across the inner membrane.
                The resulting proton gradient provides the energy required by ATP
                synthase to phosphorylate ADP to ATP.
              </p>

              <h3>Terminal Electron Acceptor</h3>
              <p>
                Molecular oxygen acts as the terminal electron acceptor at Complex IV
                and is reduced to water.
              </p>
            `,

            pathology: `
              <h2>Mitochondrion Pathology</h2>

              <ul>
                <li>Mitochondrial respiratory chain disorders</li>
                <li>Mitochondrial DNA mutations</li>
                <li>ATP depletion</li>
                <li>Oxidative stress</li>
                <li>Reactive oxygen species injury</li>
                <li>Calcium overload</li>
                <li>Abnormal apoptosis</li>
              </ul>
            `
          }
        },

        {
          id: "endoplasmic-reticulum",
          name: "Endoplasmic Reticulum",
          modelPath: "models/cell/",
          modelFile: "endoplasmic_reticulum.glb",

          notes: {
            anatomy: `
              <h2>Endoplasmic Reticulum Anatomy</h2>

              <p>
                The endoplasmic reticulum is an extensive intracellular membrane
                network continuous with the outer nuclear membrane.
              </p>

              <h3>Major Types</h3>
              <ul>
                <li><strong>Rough endoplasmic reticulum</strong></li>
                <li><strong>Smooth endoplasmic reticulum</strong></li>
              </ul>

              <h3>Rough ER</h3>
              <p>
                Rough ER contains ribosomes attached to its cytosolic surface and
                specializes in synthesis of proteins destined for secretion,
                membranes, or certain organelles.
              </p>

              <h3>Smooth ER</h3>
              <p>
                Smooth ER lacks surface-bound ribosomes and participates in lipid
                synthesis, calcium storage, carbohydrate metabolism, and detoxification.
              </p>
            `,

            physiology: `
              <h2>Endoplasmic Reticulum Physiology</h2>

              <ul>
                <li>Protein synthesis</li>
                <li>Protein folding</li>
                <li>Calcium storage</li>
                <li>Lipid synthesis</li>
                <li>Drug and toxin metabolism</li>
                <li>Membrane production</li>
              </ul>

              <h3>Protein Quality Control</h3>
              <p>
                The ER monitors newly synthesized proteins and promotes proper folding.
                Misfolded proteins may be retained and targeted for degradation.
              </p>

              <h3>Calcium Storage</h3>
              <p>
                Specialized ER membranes act as intracellular calcium stores.
                In muscle cells, the specialized form called the sarcoplasmic
                reticulum is particularly important for excitation-contraction coupling.
              </p>
            `,

            biochemistry: `
              <h2>Endoplasmic Reticulum Biochemistry</h2>

              <h3>Protein Synthesis</h3>
              <p>
                Ribosomes attached to rough ER synthesize proteins containing
                signal sequences that direct them into the secretory pathway.
              </p>

              <h3>Protein Folding</h3>
              <p>
                Molecular chaperones and ER enzymes assist protein folding and
                post-translational modification.
              </p>

              <h3>N-Glycosylation</h3>
              <p>
                Initial N-linked glycosylation of many proteins occurs within the
                ER before further modification in the Golgi apparatus.
              </p>

              <h3>Lipid Synthesis</h3>
              <p>
                Smooth ER is an important site for synthesis of phospholipids,
                cholesterol, and other lipids.
              </p>
            `,

            pathology: `
              <h2>Endoplasmic Reticulum Pathology</h2>

              <ul>
                <li>Protein misfolding</li>
                <li>Endoplasmic reticulum stress</li>
                <li>Unfolded protein response activation</li>
                <li>Abnormal calcium homeostasis</li>
                <li>Defective protein trafficking</li>
                <li>Lipid metabolism abnormalities</li>
              </ul>
            `
          }
        },

        {
          id: "golgi-apparatus",
          name: "Golgi Apparatus",
          modelPath: "models/cell/",
          modelFile: "nucleus.glb",

          notes: {
            anatomy: `
              <h2>Golgi Apparatus Anatomy</h2>

              <p>
                The Golgi apparatus is a membrane-bound organelle composed of
                stacked flattened sacs called cisternae.
              </p>

              <ul>
                <li><strong>Cis-Golgi network:</strong> receives material from the ER.</li>
                <li><strong>Cis cisternae:</strong> early processing compartment.</li>
                <li><strong>Medial cisternae:</strong> intermediate processing.</li>
                <li><strong>Trans cisternae:</strong> later processing.</li>
                <li><strong>Trans-Golgi network:</strong> sorts and dispatches cargo.</li>
              </ul>
            `,

            physiology: `
              <h2>Golgi Apparatus Physiology</h2>

              <p>
                The Golgi apparatus modifies, sorts, and packages proteins and lipids
                received primarily from the endoplasmic reticulum.
              </p>

              <ul>
                <li>Protein modification</li>
                <li>Protein sorting</li>
                <li>Protein packaging</li>
                <li>Lipid modification</li>
                <li>Lysosome formation</li>
                <li>Secretion</li>
              </ul>
            `,

            biochemistry: `
              <h2>Golgi Apparatus Biochemistry</h2>

              <h3>Glycosylation</h3>
              <p>
                Golgi enzymes modify carbohydrate chains attached to proteins and
                lipids. These modifications influence molecular stability, trafficking,
                recognition, and biological activity.
              </p>

              <h3>Protein Sorting</h3>
              <p>
                Proteins are directed toward specific destinations according to
                molecular signals and sorting mechanisms.
              </p>

              <h3>Mannose-6-Phosphate</h3>
              <p>
                Mannose-6-phosphate serves as an important targeting signal for
                enzymes destined for lysosomes.
              </p>
            `,

            pathology: `
              <h2>Golgi Apparatus Pathology</h2>

              <ul>
                <li>Defective protein sorting</li>
                <li>Abnormal glycosylation</li>
                <li>Vesicular trafficking disorders</li>
                <li>Abnormal secretion</li>
                <li>Lysosomal targeting defects</li>
              </ul>
            `
          }
        },

        {
          id: "lysosome",
          name: "Lysosome",
          modelPath: "models/cell/",
          modelFile: "nucleus.glb",

          notes: {
            anatomy: `
              <h2>Lysosome Anatomy</h2>

              <p>
                Lysosomes are membrane-bound organelles containing hydrolytic enzymes
                responsible for degradation of intracellular and extracellular material.
              </p>

              <ul>
                <li>Lysosomal membrane</li>
                <li>Acidic lumen</li>
                <li>Hydrolytic enzymes</li>
                <li>Transport proteins</li>
              </ul>
            `,

            physiology: `
              <h2>Lysosome Physiology</h2>

              <ul>
                <li>Intracellular digestion</li>
                <li>Autophagy</li>
                <li>Recycling of cellular components</li>
                <li>Degradation of endocytosed material</li>
                <li>Removal of damaged organelles</li>
              </ul>
            `,

            biochemistry: `
              <h2>Lysosome Biochemistry</h2>

              <p>
                Lysosomal enzymes function optimally in an acidic environment.
                A proton pump maintains the low intralysosomal pH required for
                enzymatic degradation.
              </p>

              <p>
                Lysosomes contain proteases, lipases, nucleases, glycosidases,
                phosphatases, and other hydrolytic enzymes.
              </p>
            `,

            pathology: `
              <h2>Lysosome Pathology</h2>

              <p>
                Defects in lysosomal enzymes or trafficking pathways can cause
                lysosomal storage diseases.
              </p>

              <ul>
                <li>Tay-Sachs disease</li>
                <li>Gaucher disease</li>
                <li>Pompe disease</li>
                <li>Niemann-Pick disease</li>
                <li>Fabry disease</li>
                <li>Metachromatic leukodystrophy</li>
              </ul>
            `
          }
        },

        {
          id: "ribosome",
          name: "Ribosome",
          modelPath: "models/cell/",
          modelFile: "nucleus.glb",

          notes: {
            anatomy: `
              <h2>Ribosome Anatomy</h2>

              <p>
                Ribosomes are ribonucleoprotein complexes responsible for translating
                messenger RNA into proteins.
              </p>

              <ul>
                <li>Small ribosomal subunit</li>
                <li>Large ribosomal subunit</li>
                <li>Ribosomal RNA</li>
                <li>Ribosomal proteins</li>
              </ul>

              <h3>Locations</h3>
              <ul>
                <li>Free cytosolic ribosomes</li>
                <li>Ribosomes attached to rough ER</li>
                <li>Mitochondrial ribosomes</li>
              </ul>
            `,

            physiology: `
              <h2>Ribosome Physiology</h2>

              <p>
                Ribosomes translate the nucleotide sequence of messenger RNA into
                a specific amino-acid sequence, producing proteins required for
                cellular structure and function.
              </p>

              <h3>Protein Translation</h3>
              <ol>
                <li>Initiation</li>
                <li>Elongation</li>
                <li>Termination</li>
              </ol>
            `,

            biochemistry: `
              <h2>Ribosome Biochemistry</h2>

              <p>
                Ribosomal RNA forms the structural and catalytic core of the ribosome.
                During translation, transfer RNA molecules deliver amino acids according
                to codons present in messenger RNA.
              </p>

              <h3>Peptide Bond Formation</h3>
              <p>
                The ribosome catalyzes peptide bond formation during elongation of
                the growing polypeptide chain.
              </p>
            `,

            pathology: `
              <h2>Ribosome Pathology</h2>

              <ul>
                <li>Ribosomopathies</li>
                <li>Defective protein synthesis</li>
                <li>Abnormal ribosomal biogenesis</li>
                <li>Inherited disorders of ribosomal components</li>
              </ul>
            `
          }
        },

        {
          id: "peroxisome",
          name: "Peroxisome",
          modelPath: null,
          modelFile: null,

          notes: {
            anatomy: `
              <h2>Peroxisome Anatomy</h2>

              <p>
                Peroxisomes are small single-membrane organelles containing enzymes
                involved in lipid metabolism and oxidative reactions.
              </p>
            `,

            physiology: `
              <h2>Peroxisome Physiology</h2>

              <ul>
                <li>Very-long-chain fatty-acid oxidation</li>
                <li>Hydrogen peroxide metabolism</li>
                <li>Plasmalogen synthesis</li>
                <li>Bile acid synthesis</li>
                <li>Detoxification reactions</li>
              </ul>
            `,

            biochemistry: `
              <h2>Peroxisome Biochemistry</h2>

              <h3>Catalase</h3>
              <p>
                Catalase converts hydrogen peroxide into water and molecular oxygen,
                helping protect cells from oxidative damage.
              </p>

              <h3>Fatty-Acid Oxidation</h3>
              <p>
                Peroxisomes participate particularly in the metabolism of
                very-long-chain fatty acids.
              </p>
            `,

            pathology: `
              <h2>Peroxisome Pathology</h2>

              <ul>
                <li>Zellweger spectrum disorders</li>
                <li>Adrenoleukodystrophy</li>
                <li>Defective peroxisomal biogenesis</li>
                <li>Abnormal very-long-chain fatty-acid metabolism</li>
              </ul>
            `
          }
        },

        {
          id: "cytoskeleton",
          name: "Cytoskeleton",
          modelPath: "models/cell/",
          modelFile: "nucleus.glb",

          notes: {
            anatomy: `
              <h2>Cytoskeleton Anatomy</h2>

              <p>
                The cytoskeleton is an intracellular network of protein filaments
                that maintains cellular shape and organization.
              </p>

              <ul>
                <li>Microfilaments</li>
                <li>Intermediate filaments</li>
                <li>Microtubules</li>
              </ul>

              <h3>Microfilaments</h3>
              <p>
                Microfilaments are primarily composed of actin.
              </p>

              <h3>Intermediate Filaments</h3>
              <p>
                Intermediate filaments provide mechanical strength and structural stability.
              </p>

              <h3>Microtubules</h3>
              <p>
                Microtubules are polymers of tubulin that participate in intracellular
                transport, chromosome separation, and cellular organization.
              </p>
            `,

            physiology: `
              <h2>Cytoskeleton Physiology</h2>

              <ul>
                <li>Maintenance of cell shape</li>
                <li>Intracellular transport</li>
                <li>Cell migration</li>
                <li>Cell division</li>
                <li>Organelle positioning</li>
                <li>Mechanical signaling</li>
              </ul>
            `,

            biochemistry: `
              <h2>Cytoskeleton Biochemistry</h2>

              <p>
                Cytoskeletal polymers continuously assemble and disassemble.
                ATP- and GTP-dependent processes regulate cytoskeletal dynamics.
              </p>

              <p>
                Molecular motor proteins such as kinesin, dynein, and myosin move
                cargo along cytoskeletal structures.
              </p>
            `,

            pathology: `
              <h2>Cytoskeleton Pathology</h2>

              <ul>
                <li>Defective intracellular transport</li>
                <li>Abnormal cell migration</li>
                <li>Structural cellular weakness</li>
                <li>Defective ciliary movement</li>
                <li>Abnormal chromosome segregation</li>
              </ul>
            `
          }
        },

        {
          id: "centrosome",
          name: "Centrosome",
          modelPath: "models/cell/",
          modelFile: "nucleus.glb",

          notes: {
            anatomy: `
              <h2>Centrosome Anatomy</h2>

              <p>
                The centrosome is the principal microtubule-organizing center of
                many animal cells.
              </p>

              <p>
                It contains a pair of centrioles surrounded by pericentriolar material.
              </p>

              <ul>
                <li>Mother centriole</li>
                <li>Daughter centriole</li>
                <li>Pericentriolar material</li>
              </ul>
            `,

            physiology: `
              <h2>Centrosome Physiology</h2>

              <p>
                Centrosomes organize microtubules and are important in establishment
                of the mitotic spindle during cell division.
              </p>
            `,

            biochemistry: `
              <h2>Centrosome Biochemistry</h2>

              <p>
                Pericentriolar material contains proteins involved in microtubule
                nucleation, particularly gamma-tubulin complexes.
              </p>
            `,

            pathology: `
              <h2>Centrosome Pathology</h2>

              <ul>
                <li>Centrosome amplification</li>
                <li>Abnormal mitotic spindle formation</li>
                <li>Chromosomal instability</li>
                <li>Abnormal cell division</li>
                <li>Association with cancer progression</li>
              </ul>
            `
          }
        },

        {
          id: "cytoplasm",
          name: "Cytoplasm",
          modelPath: "models/cell/",
          modelFile: "nucleus.glb",

          notes: {
            anatomy: `
              <h2>Cytoplasm Anatomy</h2>

              <p>
                The cytoplasm consists of the cytosol together with organelles,
                cytoskeletal structures, inclusions, and other intracellular components
                outside the nucleus.
              </p>

              <h3>Cytosol</h3>
              <p>
                The cytosol is the aqueous intracellular fluid in which many metabolic
                reactions occur.
              </p>
            `,

            physiology: `
              <h2>Cytoplasm Physiology</h2>

              <p>
                The cytoplasm provides the environment for numerous metabolic,
                signaling, transport, and structural processes.
              </p>

              <ul>
                <li>Glycolysis</li>
                <li>Protein synthesis by free ribosomes</li>
                <li>Intracellular signaling</li>
                <li>Metabolite transport</li>
                <li>Cytoskeletal activity</li>
              </ul>
            `,

            biochemistry: `
              <h2>Cytoplasm Biochemistry</h2>

              <h3>Glycolysis</h3>
              <p>
                Glycolysis occurs in the cytosol and converts glucose into pyruvate,
                generating ATP and NADH.
              </p>

              <h3>Other Cytosolic Pathways</h3>
              <ul>
                <li>Pentose phosphate pathway</li>
                <li>Glycogen metabolism</li>
                <li>Fatty-acid synthesis</li>
                <li>Parts of amino-acid metabolism</li>
              </ul>
            `,

            pathology: `
              <h2>Cytoplasm Pathology</h2>

              <ul>
                <li>Cytoplasmic swelling</li>
                <li>Fatty change</li>
                <li>Accumulation of abnormal substances</li>
                <li>Organelle damage</li>
                <li>Metabolic disturbances</li>
              </ul>
            `
          }
        }
      ]
    }
  ]
};