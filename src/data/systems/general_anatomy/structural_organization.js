export const structuralOrganization = {
  id: "structural_organization",
  name: "Structural Organization of the Human Body",

  parts: [

    // ============================================================
    // 1. CHEMICAL LEVEL
    // ============================================================

    {
      id: "chemical_level",
      name: "Chemical Level of Organization",

      notes: {
        anatomy: `

          <h2>Chemical Level of Structural Organization</h2>

          <p>
            The <strong>chemical level</strong> is the simplest level of structural
            organization of the human body. It forms the foundation upon which
            all higher levels of organization are built.
          </p>

          <p>
            At this level, the human body is composed of <strong>chemical
            elements</strong> and compounds. These substances interact through
            chemical bonds and reactions to form the molecules required for
            life.
          </p>

          <h3>1. Chemical Elements</h3>

          <p>
            A <strong>chemical element</strong> is a pure substance consisting
            of atoms that all have the same number of protons in their nuclei.
            Elements cannot be broken down into simpler substances by ordinary
            chemical reactions.
          </p>

          <p>
            The human body contains many elements, although only a relatively
            small number are required in significant amounts.
          </p>

          <h3>Major Elements in the Human Body</h3>

          <ul>
            <li><strong>Oxygen (O)</strong> – approximately 65% of body mass; essential for cellular respiration and present in water and many organic molecules.</li>
            <li><strong>Carbon (C)</strong> – approximately 18%; forms the structural backbone of organic molecules.</li>
            <li><strong>Hydrogen (H)</strong> – approximately 10%; present in water and virtually all organic compounds.</li>
            <li><strong>Nitrogen (N)</strong> – approximately 3%; an important component of proteins and nucleic acids.</li>
            <li><strong>Calcium (Ca)</strong> – important in bones, teeth, muscle contraction, blood clotting and cell signalling.</li>
            <li><strong>Phosphorus (P)</strong> – important in ATP, nucleic acids, phospholipids and bone mineral.</li>
            <li><strong>Potassium (K)</strong> – major intracellular cation involved in membrane potentials and neuromuscular function.</li>
            <li><strong>Sulfur (S)</strong> – present in certain amino acids and proteins.</li>
            <li><strong>Sodium (Na)</strong> – major extracellular cation involved in fluid balance, nerve impulses and membrane potentials.</li>
            <li><strong>Chlorine (Cl)</strong> – major extracellular anion and an important component of hydrochloric acid in the stomach.</li>
            <li><strong>Magnesium (Mg)</strong> – involved in enzyme activity, ATP-related reactions and neuromuscular function.</li>
            <li><strong>Iron (Fe)</strong> – essential for haemoglobin, myoglobin and several enzymes.</li>
          </ul>

          <h3>2. Atoms</h3>

          <p>
            An <strong>atom</strong> is the smallest unit of an element that
            retains the chemical properties of that element.
          </p>

          <p>
            An atom consists of:
          </p>

          <ul>
            <li><strong>Protons</strong> – positively charged particles located in the nucleus.</li>
            <li><strong>Neutrons</strong> – electrically neutral particles located in the nucleus.</li>
            <li><strong>Electrons</strong> – negatively charged particles that occupy regions surrounding the nucleus.</li>
          </ul>

          <h3>3. Molecules</h3>

          <p>
            When two or more atoms chemically combine, they form a
            <strong>molecule</strong>.
          </p>

          <p>Important molecules in the human body include:</p>

          <ul>
            <li>Water (H<sub>2</sub>O)</li>
            <li>Oxygen (O<sub>2</sub>)</li>
            <li>Carbon dioxide (CO<sub>2</sub>)</li>
            <li>Glucose</li>
            <li>Fatty acids</li>
            <li>Amino acids</li>
            <li>DNA</li>
            <li>RNA</li>
            <li>ATP</li>
          </ul>

          <h3>4. Inorganic Compounds</h3>

          <p>
            Inorganic substances generally do not contain carbon-hydrogen
            frameworks characteristic of organic molecules. Important
            inorganic substances in the body include:
          </p>

          <ul>
            <li>Water</li>
            <li>Mineral salts</li>
            <li>Electrolytes</li>
            <li>Acids</li>
            <li>Bases</li>
            <li>Oxygen</li>
            <li>Carbon dioxide</li>
          </ul>

          <h3>5. Organic Compounds</h3>

          <p>
            Organic molecules are primarily carbon-based molecules and form
            much of the structural and functional material of cells.
          </p>

          <h4>Major Classes of Organic Molecules</h4>

          <ol>
            <li>
              <strong>Carbohydrates</strong> – major sources of cellular energy
              and important structural molecules.
            </li>

            <li>
              <strong>Lipids</strong> – include fats, phospholipids and
              cholesterol. They provide energy, form cell membranes and
              participate in signalling.
            </li>

            <li>
              <strong>Proteins</strong> – perform structural, enzymatic,
              transport, receptor, contractile and defensive functions.
            </li>

            <li>
              <strong>Nucleic acids</strong> – DNA stores genetic information,
              while RNA participates in gene expression and protein synthesis.
            </li>

            <li>
              <strong>ATP</strong> – functions as a major immediate energy
              currency of the cell.
            </li>
          </ol>

          <h3>6. Chemical Bonds</h3>

          <p>
            Atoms combine through chemical bonds. Important bonds and
            interactions include:
          </p>

          <ul>
            <li><strong>Ionic bonds</strong> – attraction between oppositely charged ions.</li>
            <li><strong>Covalent bonds</strong> – atoms share electrons.</li>
            <li><strong>Hydrogen bonds</strong> – relatively weak attractions important in water and the structure of DNA and proteins.</li>
          </ul>

          <h3>7. Importance of the Chemical Level</h3>

          <p>
            Chemical organization provides the molecular basis for virtually
            every biological process. Chemical reactions are responsible for:
          </p>

          <ul>
            <li>Energy production</li>
            <li>DNA replication</li>
            <li>Protein synthesis</li>
            <li>Cellular signalling</li>
            <li>Muscle contraction</li>
            <li>Nerve transmission</li>
            <li>Metabolism</li>
            <li>Growth and repair</li>
            <li>Maintenance of homeostasis</li>
          </ul>

          <h3>Clinical Relevance</h3>

          <p>
            Disorders at the chemical level can affect higher levels of
            organization. Examples include electrolyte disturbances,
            acid-base abnormalities, enzyme deficiencies, metabolic disorders,
            and abnormalities of DNA.
          </p>

        `
      }
    },


    // ============================================================
    // 2. CELLULAR LEVEL
    // ============================================================

    {
      id: "cellular_level",
      name: "Cellular Level of Organization",
      modelPath: "models/cell/",
      modelFile: "cell.glb",

      notes: {
        anatomy: `

          <h2>Cellular Level of Structural Organization</h2>

          <p>
            The <strong>cellular level</strong> is the second major level of
            structural organization of the human body. Cells are the
            <strong>basic structural and functional units of life</strong>.
          </p>

          <p>
            The chemical level provides the molecules required to construct
            cells. Cells then combine and specialize to form tissues.
          </p>

          <h3>1. General Structure of a Human Cell</h3>

          <p>
            Although human cells vary greatly in size, shape and function,
            most cells contain three fundamental components:
          </p>

          <ol>
            <li><strong>Plasma membrane</strong></li>
            <li><strong>Cytoplasm</strong></li>
            <li><strong>Nucleus</strong></li>
          </ol>

          <h3>2. Plasma Membrane</h3>

          <p>
            The <strong>plasma membrane</strong> is the selectively permeable
            boundary surrounding the cell. It separates the intracellular
            environment from the extracellular environment.
          </p>

          <h4>Structure</h4>

          <p>
            The plasma membrane is primarily composed of a
            <strong>phospholipid bilayer</strong> containing proteins,
            cholesterol and carbohydrate-containing molecules.
          </p>

          <h4>Functions</h4>

          <ul>
            <li>Separates the cell from its environment.</li>
            <li>Controls movement of substances into and out of the cell.</li>
            <li>Receives extracellular signals through membrane receptors.</li>
            <li>Participates in cell recognition.</li>
            <li>Provides attachment sites for cytoskeletal structures.</li>
            <li>Participates in cell adhesion and communication.</li>
          </ul>

          <h3>3. Cytoplasm</h3>

          <p>
            The <strong>cytoplasm</strong> consists of the cytosol and the
            cellular structures suspended within it, excluding the nucleus.
          </p>

          <p>
            The cytosol contains water, ions, proteins, nutrients and numerous
            dissolved substances in which many metabolic reactions occur.
          </p>

          <h3>4. Nucleus</h3>

          <p>
            The <strong>nucleus</strong> contains most of the cell's genetic
            material in the form of DNA.
          </p>

          <p>The nucleus is involved in:</p>

          <ul>
            <li>Storage of genetic information</li>
            <li>DNA replication</li>
            <li>Regulation of gene expression</li>
            <li>Control of protein synthesis</li>
            <li>Cellular reproduction</li>
          </ul>

          <h3>5. Cellular Organelles</h3>

          <p>
            <strong>Organelles</strong> are specialized structures within cells
            that perform particular functions.
          </p>

          <h4>Mitochondria</h4>

          <p>
            Mitochondria are major sites of aerobic cellular respiration and
            ATP production. Cells with high energy requirements, such as
            cardiac and skeletal muscle cells, contain numerous mitochondria.
          </p>

          <h4>Ribosomes</h4>

          <p>
            Ribosomes are responsible for <strong>protein synthesis</strong>.
            They may be free within the cytosol or attached to rough
            endoplasmic reticulum.
          </p>

          <h4>Endoplasmic Reticulum</h4>

          <p>
            The endoplasmic reticulum is a membrane-bound network involved in
            synthesis and processing of cellular products.
          </p>

          <ul>
            <li>
              <strong>Rough ER</strong> – contains ribosomes and is involved
              primarily in synthesis of proteins destined for secretion,
              membranes or certain organelles.
            </li>
            <li>
              <strong>Smooth ER</strong> – involved in lipid synthesis,
              detoxification, calcium storage and other metabolic processes.
            </li>
          </ul>

          <h4>Golgi Apparatus</h4>

          <p>
            The Golgi apparatus modifies, sorts and packages proteins and
            lipids for delivery to different cellular destinations.
          </p>

          <h4>Lysosomes</h4>

          <p>
            Lysosomes contain hydrolytic enzymes involved in intracellular
            digestion and degradation of cellular material.
          </p>

          <h4>Peroxisomes</h4>

          <p>
            Peroxisomes participate in fatty-acid metabolism and detoxification
            reactions, including the breakdown of hydrogen peroxide.
          </p>

          <h4>Cytoskeleton</h4>

          <p>
            The cytoskeleton is a network of protein filaments that maintains
            cell shape and contributes to intracellular transport, movement
            and cell division.
          </p>

          <p>Major components include:</p>

          <ul>
            <li>Microfilaments</li>
            <li>Intermediate filaments</li>
            <li>Microtubules</li>
          </ul>

          <h3>6. Cellular Transport</h3>

          <p>
            Cells must continuously exchange substances with their
            environment.
          </p>

          <h4>Passive Transport</h4>

          <ul>
            <li>Simple diffusion</li>
            <li>Facilitated diffusion</li>
            <li>Osmosis</li>
          </ul>

          <h4>Active Transport</h4>

          <p>
            Active transport requires cellular energy, usually ATP, to move
            substances against their electrochemical gradients.
          </p>

          <p>
            A major example is the <strong>sodium-potassium pump
            (Na<sup>+</sup>/K<sup>+</sup>-ATPase)</strong>.
          </p>

          <h4>Vesicular Transport</h4>

          <ul>
            <li><strong>Endocytosis</strong> – movement of material into the cell.</li>
            <li><strong>Exocytosis</strong> – release of material from the cell.</li>
          </ul>

          <h3>7. Cellular Specialization</h3>

          <p>
            Human cells become specialized to perform specific functions.
            Examples include:
          </p>

          <ul>
            <li><strong>Neurons</strong> – transmit electrical and chemical signals.</li>
            <li><strong>Cardiac muscle cells</strong> – generate coordinated cardiac contraction.</li>
            <li><strong>Skeletal muscle cells</strong> – produce voluntary movement.</li>
            <li><strong>Erythrocytes</strong> – transport oxygen and carbon dioxide.</li>
            <li><strong>Adipocytes</strong> – store energy and participate in endocrine signalling.</li>
            <li><strong>Osteocytes</strong> – maintain bone tissue.</li>
            <li><strong>Hepatocytes</strong> – perform numerous metabolic and synthetic functions in the liver.</li>
          </ul>

          <h3>8. Cell Division</h3>

          <p>
            Cell division is essential for growth, development, maintenance
            and repair.
          </p>

          <h4>Mitosis</h4>

          <p>
            Mitosis produces genetically similar daughter cells and is
            important for somatic growth and tissue repair.
          </p>

          <h4>Meiosis</h4>

          <p>
            Meiosis occurs during formation of gametes and produces cells with
            a haploid chromosome number.
          </p>

          <h3>Clinical Relevance</h3>

          <p>
            Cellular abnormalities are central to many diseases. Examples
            include cancer, cellular injury, mitochondrial disorders,
            membrane transport disorders and degenerative diseases.
          </p>

        `
      }
    },


    // ============================================================
    // 3. TISSUE LEVEL
    // ============================================================

    {
      id: "tissue_level",
      name: "Tissue Level of Organization and Histology",

      notes: {
        anatomy: `

          <h2>Tissue Level of Structural Organization</h2>

          <p>
            The <strong>tissue level</strong> is formed when groups of
            structurally and functionally related cells organize together to
            perform specialized functions.
          </p>

          <p>
            The scientific study of tissues is called
            <strong>histology</strong>.
          </p>

          <p>
            The human body has four fundamental tissue types:
          </p>

          <ol>
            <li>Epithelial tissue</li>
            <li>Connective tissue</li>
            <li>Muscle tissue</li>
            <li>Nervous tissue</li>
          </ol>


          <!-- ======================================================
               EPITHELIAL TISSUE
          ======================================================= -->

          <h3>1. Epithelial Tissue</h3>

          <p>
            <strong>Epithelial tissue</strong> covers body surfaces, lines
            internal cavities and forms many glands.
          </p>

          <h4>Major Functions</h4>

          <ul>
            <li>Protection</li>
            <li>Absorption</li>
            <li>Secretion</li>
            <li>Excretion</li>
            <li>Filtration</li>
            <li>Diffusion</li>
            <li>Sensation</li>
          </ul>

          <h4>General Characteristics</h4>

          <ul>
            <li>Cells are closely packed.</li>
            <li>There is relatively little extracellular matrix.</li>
            <li>Cells exhibit polarity.</li>
            <li>They rest on a basement membrane.</li>
            <li>They are generally avascular.</li>
            <li>They receive nutrients by diffusion from underlying tissues.</li>
            <li>Many epithelia have a high capacity for regeneration.</li>
          </ul>

          <h4>Classification According to Number of Layers</h4>

          <ul>
            <li><strong>Simple epithelium</strong> – one cell layer.</li>
            <li><strong>Stratified epithelium</strong> – multiple cell layers.</li>
            <li><strong>Pseudostratified epithelium</strong> – appears multilayered but all cells contact the basement membrane.</li>
          </ul>

          <h4>Classification According to Cell Shape</h4>

          <ul>
            <li><strong>Squamous</strong> – flattened cells.</li>
            <li><strong>Cuboidal</strong> – approximately cube-shaped cells.</li>
            <li><strong>Columnar</strong> – taller cells with an elongated appearance.</li>
          </ul>

          <h4>Major Types</h4>

          <ul>
            <li>Simple squamous epithelium</li>
            <li>Simple cuboidal epithelium</li>
            <li>Simple columnar epithelium</li>
            <li>Pseudostratified columnar epithelium</li>
            <li>Stratified squamous epithelium</li>
            <li>Stratified cuboidal epithelium</li>
            <li>Stratified columnar epithelium</li>
            <li>Transitional epithelium</li>
          </ul>

          <h4>Examples</h4>

          <ul>
            <li>Alveoli – simple squamous epithelium</li>
            <li>Kidney tubules – simple cuboidal epithelium</li>
            <li>Small intestine – simple columnar epithelium</li>
            <li>Respiratory tract – commonly pseudostratified ciliated columnar epithelium</li>
            <li>Epidermis – keratinized stratified squamous epithelium</li>
            <li>Urinary bladder – transitional epithelium</li>
          </ul>


          <!-- ======================================================
               CONNECTIVE TISSUE
          ======================================================= -->

          <h3>2. Connective Tissue</h3>

          <p>
            <strong>Connective tissue</strong> supports, connects, protects
            and separates other tissues and organs.
          </p>

          <p>
            Unlike epithelial tissue, connective tissue generally contains
            abundant <strong>extracellular matrix</strong> composed of
            ground substance and protein fibers.
          </p>

          <h4>Major Functions</h4>

          <ul>
            <li>Structural support</li>
            <li>Protection</li>
            <li>Binding tissues together</li>
            <li>Energy storage</li>
            <li>Transport</li>
            <li>Immune defense</li>
            <li>Tissue repair</li>
          </ul>
            <div class="sketchfab-embed-wrapper"> <iframe title="connective tissue elements labelled" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d1395e3520864214852df08a0daaa338/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/connective-tissue-elements-labelled-d1395e3520864214852df08a0daaa338" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> connective tissue elements labelled </a> by <a href="https://sketchfab.com/Deepankar.Parmar" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Deepankar.Parmar </a> on <a href="https://sketchfab.com" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
          <h4>Major Components</h4>

          <ul>
            <li><strong>Cells</strong></li>
            <li><strong>Protein fibers</strong></li>
            <li><strong>Ground substance</strong></li>
          </ul>

          <h4>Types of Connective Tissue</h4>

          <h5>Connective Tissue Proper</h5>

          <ul>
            <li>Loose areolar connective tissue</li>
            <li>Adipose tissue</li>
            <li>Reticular connective tissue</li>
            <li>Dense regular connective tissue</li>
            <li>Dense irregular connective tissue</li>
            <li>Elastic connective tissue</li>
          </ul>

          <h5>Supporting Connective Tissue</h5>

          <ul>
            <li>Cartilage</li>
            <li>Bone</li>
          </ul>

          <h5>Fluid Connective Tissue</h5>

          <ul>
            <li>Blood</li>
            <li>Lymph</li>
          </ul>

          <h4>Examples</h4>

          <ul>
            <li>Tendons – dense regular connective tissue</li>
            <li>Dermis – predominantly dense irregular connective tissue</li>
            <li>Fat deposits – adipose tissue</li>
            <li>Articular surfaces – hyaline cartilage</li>
            <li>Skeleton – bone tissue</li>
            <li>Blood – fluid connective tissue</li>
          </ul>


          <!-- ======================================================
               MUSCLE TISSUE
          ======================================================= -->

          <h3>3. Muscle Tissue</h3>

          <p>
            <strong>Muscle tissue</strong> is specialized for contraction.
            Contraction allows the body to produce movement, maintain posture,
            propel substances through hollow organs and generate heat.
          </p>

          <h4>Types of Muscle Tissue</h4>

          <h5>A. Skeletal Muscle</h5>

          <p>
            Skeletal muscle is generally attached to bones and is responsible
            for voluntary movement and maintenance of posture.
          </p>

          <ul>
            <li>Striated</li>
            <li>Long cylindrical fibres</li>
            <li>Multiple peripheral nuclei</li>
            <li>Usually under voluntary control</li>
          </ul>
              <div class="sketchfab-embed-wrapper"> <iframe title="Skeletal muscle structure (actin &amp; myosin)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b86266b76c874de58d59bf3572815541/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/skeletal-muscle-structure-actin-myosin-b86266b76c874de58d59bf3572815541" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Skeletal muscle structure (actin &amp; myosin) </a> by <a href="https://sketchfab.com/Ebers" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ebers </a> on <a href="https://sketchfab.com" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
          <h5>B. Cardiac Muscle</h5>

          <p>
            Cardiac muscle forms the muscular wall of the heart and generates
            the force required for cardiac pumping.
          </p>

          <ul>
            <li>Striated</li>
            <li>Usually one central nucleus</li>
            <li>Branched cells</li>
            <li>Intercalated discs</li>
            <li>Involuntary control</li>
          </ul>
          <div class="sketchfab-embed-wrapper"> <iframe title="Heart muscle cell (cardiomyocyte)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c48795cc33a442b3b84bcb4e44ea9717/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/heart-muscle-cell-cardiomyocyte-c48795cc33a442b3b84bcb4e44ea9717" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Heart muscle cell (cardiomyocyte) </a> by <a href="https://sketchfab.com/bryonahamilton" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Bryona </a> on <a href="https://sketchfab.com" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>

          <h5>C. Smooth Muscle</h5>

          <p>
            Smooth muscle is found primarily in the walls of hollow organs
            and blood vessels.
          </p>

          <ul>
            <li>Non-striated</li>
            <li>Spindle-shaped cells</li>
            <li>Single central nucleus</li>
            <li>Involuntary control</li>
          </ul>

          <h4>Functions of Muscle Tissue</h4>

          <ul>
            <li>Movement</li>
            <li>Maintenance of posture</li>
            <li>Production of heat</li>
            <li>Blood circulation</li>
            <li>Movement of food through the gastrointestinal tract</li>
            <li>Control of diameter of blood vessels and airways</li>
            <li>Expulsion of substances from hollow organs</li>
          </ul>


          <!-- ======================================================
               NERVOUS TISSUE
          ======================================================= -->

          <h3>4. Nervous Tissue</h3>

          <p>
            <strong>Nervous tissue</strong> is specialized for communication,
            information processing and rapid coordination of body functions.
          </p>

          <p>
            It forms the major components of the
            <strong>central nervous system</strong> and
            <strong>peripheral nervous system</strong>.
          </p>

          <h4>Major Cellular Components</h4>

          <h5>Neurons</h5>

          <p>
            <strong>Neurons</strong> are excitable cells specialized to
            receive, process and transmit electrical and chemical signals.
          </p>

          <p>A typical neuron contains:</p>

          <ul>
            <li><strong>Cell body (soma)</strong></li>
            <li><strong>Dendrites</strong></li>
            <li><strong>Axon</strong></li>
          </ul>

          <h5>Neuroglia</h5>

          <p>
            <strong>Neuroglia</strong>, or glial cells, support and maintain
            neurons and contribute to the specialized environment required for
            nervous system function.
          </p>

          <p>
            Important glial cells include:
          </p>

          <ul>
            <li>Astrocytes</li>
            <li>Oligodendrocytes</li>
            <li>Microglia</li>
            <li>Ependymal cells</li>
            <li>Schwann cells</li>
            <li>Satellite cells</li>
          </ul>

          <h4>Functions of Nervous Tissue</h4>

          <ul>
            <li>Detection of sensory stimuli</li>
            <li>Transmission of electrical signals</li>
            <li>Integration of information</li>
            <li>Coordination of body functions</li>
            <li>Control of skeletal muscle movement</li>
            <li>Regulation of visceral functions</li>
            <li>Participation in cognition, memory and emotion</li>
          </ul>

          <img src="images/neural_tissue.png" alt="Nervous tissue" class="image-center" />
          <!-- ======================================================
               COMPARISON
          ======================================================= -->

          <h3>Comparison of the Four Basic Tissue Types</h3>

          <table>
            <thead>
              <tr>
                <th>Tissue</th>
                <th>Major Function</th>
                <th>Examples</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td><strong>Epithelial</strong></td>
                <td>Covering, lining, protection, absorption and secretion</td>
                <td>Skin, intestinal lining, glands</td>
              </tr>

              <tr>
                <td><strong>Connective</strong></td>
                <td>Support, binding, protection, storage and transport</td>
                <td>Bone, cartilage, blood, tendons, adipose tissue</td>
              </tr>

              <tr>
                <td><strong>Muscle</strong></td>
                <td>Contraction and movement</td>
                <td>Skeletal, cardiac and smooth muscle</td>
              </tr>

              <tr>
                <td><strong>Nervous</strong></td>
                <td>Communication, integration and control</td>
                <td>Brain, spinal cord and peripheral nerves</td>
              </tr>

            </tbody>
          </table>


          <!-- ======================================================
               CLINICAL RELEVANCE
          ======================================================= -->

          <h3>Clinical Relevance of Tissue Organization</h3>

          <p>
            Understanding tissues is fundamental to understanding disease.
            Many pathological processes begin at the cellular or tissue level
            before becoming clinically apparent at the organ or systemic
            level.
          </p>

          <p>Examples include:</p>

          <ul>
            <li><strong>Carcinoma</strong> – malignant tumour arising from epithelial cells.</li>
            <li><strong>Sarcoma</strong> – malignant tumour arising from connective, muscle or related mesenchymal tissues.</li>
            <li><strong>Fibrosis</strong> – excessive deposition of connective tissue.</li>
            <li><strong>Muscular dystrophy</strong> – disorders involving degeneration and weakness of skeletal muscle.</li>
            <li><strong>Neuropathy</strong> – dysfunction or damage involving peripheral nerves.</li>
            <li><strong>Inflammation</strong> – tissue response involving vascular, cellular and molecular mechanisms.</li>
          </ul>

          <h3>Key Concept</h3>

          <p>
            The four basic tissue types do not normally exist as isolated
            structures. They combine in different proportions and arrangements
            to form organs.
          </p>

          <p>
            For example, the <strong>stomach</strong> contains epithelial,
            connective, smooth muscle and nervous tissue organized together
            into a functional organ.
          </p>

        `
      }
    }

  ]
};