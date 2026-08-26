export const lymphaticSystem = {
  id: "lymphatic",
  name: "Lymphatic / Immune System",

  organs: [

    // ============================================================
    // SPLEEN
    // ============================================================

    {
      id: "spleen",
      name: "Spleen",
      modelPath: "models/lymphatic/spleen/",
      modelFile: "spleen.glb",

      notes: {

        anatomy: `
          <h2>Spleen Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The spleen is the largest secondary lymphoid organ and is located in the
            left upper quadrant of the abdominal cavity. It lies beneath the left
            hemidiaphragm and is closely related to the stomach, left kidney,
            pancreas and splenic flexure of the colon.
          </p>

          <p>
            The spleen is an important organ of blood filtration, immune surveillance,
            antigen presentation and removal of aged or abnormal blood cells.
          </p>

          <h3>Location</h3>
          <ul>
            <li>Located in the left hypochondrium.</li>
            <li>Lies approximately between the ninth and eleventh ribs.</li>
            <li>Long axis follows the tenth rib.</li>
            <li>Located posterior to the stomach.</li>
            <li>Superiorly related to the diaphragm.</li>
            <li>Medially related to the stomach and pancreatic tail.</li>
          </ul>

          <h3>External Features</h3>
          <ul>
            <li><strong>Diaphragmatic surface:</strong> convex and smooth.</li>
            <li><strong>Visceral surface:</strong> contains impressions from adjacent organs.</li>
            <li><strong>Superior border:</strong> characteristically contains notches.</li>
            <li><strong>Inferior border:</strong> generally smoother.</li>
            <li><strong>Hilum:</strong> entry and exit point for splenic vessels and nerves.</li>
          </ul>

          <h3>Visceral Impressions</h3>
          <ul>
            <li>Gastric impression.</li>
            <li>Renal impression.</li>
            <li>Colic impression.</li>
            <li>Pancreatic impression.</li>
          </ul>

          <h3>Ligaments</h3>
          <ul>
            <li><strong>Gastrosplenic ligament:</strong> connects spleen to stomach.</li>
            <li><strong>Splenorenal ligament:</strong> connects spleen to posterior abdominal structures and contains the splenic vessels and pancreatic tail.</li>
          </ul>

          <h3>Blood Supply</h3>
          <p>
            The spleen receives arterial blood from the splenic artery, a branch of
            the coeliac trunk. Venous blood leaves through the splenic vein, which
            contributes to formation of the portal vein.
          </p>

          <h3>Internal Structure</h3>
          <ul>
            <li><strong>Capsule:</strong> fibrous connective tissue surrounding the organ.</li>
            <li><strong>Trabeculae:</strong> connective tissue extensions from the capsule.</li>
            <li><strong>White pulp:</strong> lymphoid tissue involved in immune responses.</li>
            <li><strong>Red pulp:</strong> involved in filtration of circulating blood.</li>
            <li><strong>Marginal zone:</strong> interface between red and white pulp important for antigen surveillance.</li>
          </ul>
        `,

        physiology: `
          <h2>Spleen Physiology</h2>

          <h3>Blood Filtration</h3>
          <p>
            The spleen continuously filters circulating blood. Abnormal, damaged or
            senescent erythrocytes are removed by macrophages within the splenic
            red pulp.
          </p>

          <h3>Immune Surveillance</h3>
          <p>
            Splenic lymphoid tissue monitors blood-borne antigens. B lymphocytes,
            T lymphocytes, macrophages and antigen-presenting cells participate in
            immune responses.
          </p>

          <h3>Removal of Old Red Blood Cells</h3>
          <p>
            Senescent erythrocytes become less deformable and are trapped within
            the splenic microcirculation. Macrophages recognize and phagocytose
            these cells.
          </p>

          <h3>Platelet Sequestration</h3>
          <p>
            The spleen normally contains a proportion of the body's circulating
            platelets and can release them into the circulation when required.
          </p>

          <h3>Iron Recycling</h3>
          <p>
            Iron from hemoglobin is recovered from senescent erythrocytes and
            returned to the body's iron-utilization pathways.
          </p>

          <h3>Immune Response</h3>
          <p>
            The spleen contributes to antibody production and cellular immune
            responses against microorganisms and other antigens present in blood.
          </p>
        `,

        biochemistry: `
          <h2>Spleen Biochemistry</h2>

          <h3>Hemoglobin Breakdown</h3>
          <p>
            Macrophages degrade hemoglobin from senescent erythrocytes. Globin is
            broken down into amino acids, while heme is metabolized through pathways
            producing biliverdin and subsequently bilirubin.
          </p>

          <h3>Iron Metabolism</h3>
          <p>
            Iron released from heme can be stored within macrophages as ferritin or
            hemosiderin and subsequently transported for reuse in erythropoiesis.
          </p>

          <h3>Immune Mediators</h3>
          <p>
            Cytokines, chemokines, antibodies, complement components and other
            signaling molecules participate in splenic immune activity.
          </p>
        `,

        histology: `
          <h2>Spleen Histology</h2>

          <h3>Capsule</h3>
          <p>
            The spleen is surrounded by a connective tissue capsule containing
            elastic fibers and smooth muscle.
          </p>

          <h3>White Pulp</h3>
          <p>
            White pulp consists primarily of lymphoid tissue organized around
            branches of the central arteries. T-cell-rich regions surround the
            arterial vessels, while B-cell follicles are also present.
          </p>

          <h3>Red Pulp</h3>
          <p>
            Red pulp consists of splenic cords and venous sinusoids. It filters
            erythrocytes and provides an environment for macrophage-mediated
            removal of abnormal blood cells.
          </p>

          <h3>Marginal Zone</h3>
          <p>
            The marginal zone lies between white and red pulp and contains
            specialized immune cells involved in recognition of blood-borne
            antigens.
          </p>
        `,

        immunology: `
          <h2>Spleen Immunology</h2>

          <p>
            The spleen is particularly important for immune responses against
            microorganisms circulating in the bloodstream.
          </p>

          <ul>
            <li>B lymphocytes recognize antigens and may differentiate into plasma cells.</li>
            <li>Plasma cells produce antibodies.</li>
            <li>T lymphocytes participate in cellular immune responses.</li>
            <li>Macrophages phagocytose microorganisms and damaged cells.</li>
            <li>Dendritic cells participate in antigen presentation.</li>
          </ul>

          <h3>Encapsulated Bacteria</h3>
          <p>
            Splenic function is particularly important in defense against
            encapsulated organisms because effective antibody-mediated
            opsonization and clearance depend heavily on splenic immune activity.
          </p>
        `,

        pathology: `
          <h2>Spleen Pathology</h2>

          <h3>Splenomegaly</h3>
          <p>
            Splenomegaly is enlargement of the spleen. Causes include infections,
            portal hypertension, hematological disorders, hemolytic diseases,
            infiltrative disorders and malignancy.
          </p>

          <h3>Hypersplenism</h3>
          <p>
            Hypersplenism refers to excessive sequestration or destruction of
            circulating blood cells by an enlarged or overactive spleen. It may
            produce anemia, leukopenia and thrombocytopenia.
          </p>

          <h3>Splenic Rupture</h3>
          <p>
            Splenic rupture can occur following abdominal trauma and may result in
            significant intraperitoneal hemorrhage.
          </p>

          <h3>Splenic Infarction</h3>
          <p>
            Interruption of splenic arterial blood flow can produce ischemic
            infarction of splenic tissue.
          </p>

          <h3>Asplenia</h3>
          <p>
            Loss of splenic function increases susceptibility to severe infection,
            particularly from encapsulated bacteria.
          </p>
        `,

        microbiology: `
          <h2>Spleen and Microbiology</h2>

          <p>
            The spleen participates in clearance of microorganisms from the
            bloodstream.
          </p>

          <ul>
            <li><strong>Streptococcus pneumoniae:</strong> particularly important in patients without functional spleens.</li>
            <li><strong>Neisseria meningitidis:</strong> severe invasive infection may occur in individuals with impaired splenic function.</li>
            <li><strong>Haemophilus influenzae:</strong> encapsulated strains can cause invasive disease.</li>
            <li><strong>Plasmodium species:</strong> the spleen participates in removal of parasitized erythrocytes.</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Correlations</h2>

          <h3>Splenectomy</h3>
          <p>
            Surgical removal of the spleen may be required following severe trauma,
            selected hematological diseases or other conditions. Patients without
            effective splenic function have increased susceptibility to severe
            infections with encapsulated organisms.
          </p>

          <h3>Kehr Sign</h3>
          <p>
            Irritation of the diaphragm from splenic injury can produce referred
            pain to the left shoulder through the phrenic nerve.
          </p>

          <h3>Portal Hypertension</h3>
          <p>
            Increased pressure in the portal venous system can cause splenic
            congestion and splenomegaly.
          </p>
        `,

        keyFacts: `
          <h2>High-Yield Spleen Facts</h2>
          <ul>
            <li>The spleen is the largest secondary lymphoid organ.</li>
            <li>It filters blood rather than lymph.</li>
            <li>White pulp is primarily involved in immune function.</li>
            <li>Red pulp removes aged and abnormal erythrocytes.</li>
            <li>The splenic artery arises from the coeliac trunk.</li>
            <li>The splenic vein contributes to the portal vein.</li>
            <li>Splenectomy increases susceptibility to severe infection by encapsulated bacteria.</li>
          </ul>
        `
      },

      parts: [
        {
          id: "splenic-white-pulp",
          name: "Splenic White Pulp",
          modelPath: "models/lymphatic/spleen/",
          modelFile: "splenic_white_pulp.glb",

          notes: {
            anatomy: `
              <h2>Splenic White Pulp</h2>
              <p>
                White pulp is lymphoid tissue organized around branches of the
                splenic arterial circulation.
              </p>

              <ul>
                <li>Contains lymphocytes and antigen-presenting cells.</li>
                <li>Contains periarteriolar lymphoid sheaths.</li>
                <li>Contains B-cell follicles.</li>
                <li>Participates in immune responses to blood-borne antigens.</li>
              </ul>
            `,

            physiology: `
              <p>
                White pulp detects blood-borne antigens and coordinates adaptive
                immune responses involving B and T lymphocytes.
              </p>
            `,

            immunology: `
              <p>
                T-cell zones and B-cell follicles allow interaction between
                antigen-presenting cells, lymphocytes and antibody-producing cells.
              </p>
            `
          }
        },

        {
          id: "splenic-red-pulp",
          name: "Splenic Red Pulp",
          modelPath: "models/lymphatic/spleen/",
          modelFile: "splenic_red_pulp.glb",

          notes: {
            anatomy: `
              <h2>Splenic Red Pulp</h2>
              <p>
                Red pulp consists of splenic cords and venous sinusoids and forms
                the major blood-filtering compartment of the spleen.
              </p>
            `,

            physiology: `
              <p>
                Red pulp removes senescent and abnormal erythrocytes and
                participates in platelet sequestration and blood filtration.
              </p>
            `,

            histology: `
              <p>
                Splenic cords contain macrophages, lymphocytes, plasma cells and
                blood cells. Sinusoids allow passage of appropriately deformable
                erythrocytes.
              </p>
            `
          }
        }
      ]
    },


    // ============================================================
    // LYMPH NODES
    // ============================================================

    {
      id: "lymph-nodes",
      name: "Lymph Nodes",
      modelPath: "models/lymphatic/lymph-nodes/",
      modelFile: "lymph_nodes.glb",

      notes: {

        anatomy: `
          <h2>Lymph Node Anatomy</h2>

          <p>
            Lymph nodes are small, bean-shaped secondary lymphoid organs located
            along lymphatic vessels. They filter lymph and provide sites where
            immune cells encounter antigens.
          </p>

          <h3>Major Regions</h3>
          <ul>
            <li><strong>Cortex:</strong> contains lymphoid follicles and is rich in B lymphocytes.</li>
            <li><strong>Paracortex:</strong> rich in T lymphocytes and contains high endothelial venules.</li>
            <li><strong>Medulla:</strong> contains medullary cords and sinuses.</li>
            <li><strong>Hilum:</strong> site where blood vessels and the efferent lymphatic vessel leave the node.</li>
          </ul>

          <h3>Lymphatic Flow</h3>
          <ol>
            <li>Afferent lymphatic vessels enter the convex surface.</li>
            <li>Lymph enters the subcapsular sinus.</li>
            <li>Lymph passes through cortical and medullary sinuses.</li>
            <li>Lymph exits through an efferent lymphatic vessel at the hilum.</li>
          </ol>
        `,

        physiology: `
          <h2>Lymph Node Physiology</h2>

          <p>
            Lymph nodes filter lymph and provide an organized environment for
            antigen recognition, lymphocyte activation and proliferation.
          </p>

          <ul>
            <li>Trap particulate material.</li>
            <li>Expose immune cells to antigens.</li>
            <li>Support B-cell activation.</li>
            <li>Support T-cell activation.</li>
            <li>Facilitate antibody production.</li>
            <li>Provide macrophage-mediated clearance of pathogens.</li>
          </ul>
        `,

        immunology: `
          <h2>Lymph Node Immunology</h2>

          <p>
            Antigen-presenting cells transport antigens from peripheral tissues
            into draining lymph nodes where they can activate lymphocytes.
          </p>

          <ul>
            <li>Dendritic cells present antigen to T lymphocytes.</li>
            <li>B lymphocytes recognize antigens within follicles.</li>
            <li>Activated B cells can differentiate into plasma cells.</li>
            <li>Memory lymphocytes contribute to long-term adaptive immunity.</li>
          </ul>
        `,

        pathology: `
          <h2>Lymph Node Pathology</h2>

          <h3>Lymphadenopathy</h3>
          <p>
            Lymphadenopathy refers to abnormal enlargement or alteration of lymph
            nodes. Causes include infection, inflammation, autoimmune disease and
            malignancy.
          </p>

          <h3>Lymphadenitis</h3>
          <p>
            Lymphadenitis is inflammation of lymph nodes, commonly associated with
            infection in the drainage territory.
          </p>

          <h3>Lymphoma</h3>
          <p>
            Lymphomas are malignant disorders of lymphoid cells. Major categories
            include Hodgkin lymphoma and non-Hodgkin lymphomas.
          </p>
        `,

        microbiology: `
          <h2>Lymph Nodes and Microbiology</h2>

          <p>
            Lymph nodes can enlarge during infections as immune cells proliferate
            and respond to pathogens.
          </p>

          <ul>
            <li>Bacterial lymphadenitis.</li>
            <li>Tuberculous lymphadenitis.</li>
            <li>Viral lymphadenopathy.</li>
            <li>Parasitic lymphatic infections.</li>
          </ul>
        `,

        histology: `
          <h2>Lymph Node Histology</h2>

          <ul>
            <li>Fibrous capsule surrounds the node.</li>
            <li>Trabeculae extend inward from the capsule.</li>
            <li>Cortex contains lymphoid follicles.</li>
            <li>Paracortex is predominantly T-cell rich.</li>
            <li>Medulla contains cords and sinuses.</li>
            <li>Reticular connective tissue forms a supporting framework.</li>
          </ul>
        `,

        clinical: `
          <h2>Clinical Correlations</h2>

          <p>
            The distribution of enlarged lymph nodes can provide clues about the
            location of infection or malignancy.
          </p>

          <ul>
            <li><strong>Cervical nodes:</strong> head and neck drainage.</li>
            <li><strong>Axillary nodes:</strong> upper limb and portions of thoracic wall and breast.</li>
            <li><strong>Inguinal nodes:</strong> lower limb and superficial perineal regions.</li>
            <li><strong>Mediastinal nodes:</strong> thoracic structures.</li>
            <li><strong>Mesenteric nodes:</strong> gastrointestinal drainage.</li>
          </ul>
        `
      }
    },


    // ============================================================
    // THYMUS
    // ============================================================

    {
      id: "thymus",
      name: "Thymus",
      modelPath: "models/lymphatic/thymus/",
      modelFile: "thymus.glb",

      notes: {

        anatomy: `
          <h2>Thymus Anatomy</h2>

          <p>
            The thymus is a primary lymphoid organ located in the anterior superior
            mediastinum. It consists of two lobes and is most prominent during
            childhood and adolescence.
          </p>

          <h3>Structure</h3>
          <ul>
            <li>Surrounded by a connective tissue capsule.</li>
            <li>Divided into lobules.</li>
            <li>Each lobule contains a cortex and medulla.</li>
            <li>Contains specialized epithelial cells and developing T lymphocytes.</li>
          </ul>
        `,

        physiology: `
          <h2>Thymus Physiology</h2>

          <p>
            The thymus is responsible for maturation and selection of T lymphocytes.
          </p>

          <ul>
            <li>T-cell precursors enter the thymus.</li>
            <li>T cells undergo receptor development.</li>
            <li>Positive selection ensures recognition of self-MHC molecules.</li>
            <li>Negative selection removes strongly self-reactive T cells.</li>
            <li>Mature T cells leave the thymus and populate peripheral lymphoid tissues.</li>
          </ul>
        `,

        immunology: `
          <h2>Thymic Immunology</h2>

          <p>
            The thymus establishes central T-cell tolerance and contributes to
            development of the adaptive immune system.
          </p>

          <h3>Positive Selection</h3>
          <p>
            Developing T cells that can appropriately interact with self-MHC
            molecules receive survival signals.
          </p>

          <h3>Negative Selection</h3>
          <p>
            T cells with excessive reactivity against self-antigens are eliminated
            or otherwise prevented from entering the peripheral immune system.
          </p>
        `,

        histology: `
          <h2>Thymus Histology</h2>

          <ul>
            <li><strong>Cortex:</strong> densely populated with immature T lymphocytes.</li>
            <li><strong>Medulla:</strong> contains more mature lymphocytes and thymic epithelial structures.</li>
            <li><strong>Hassall corpuscles:</strong> characteristic structures of the thymic medulla.</li>
          </ul>
        `,

        pathology: `
          <h2>Thymus Pathology</h2>

          <h3>Thymoma</h3>
          <p>
            Thymoma is a tumor arising from thymic epithelial cells and may be
            associated with autoimmune disorders, particularly myasthenia gravis.
          </p>

          <h3>Thymic Involution</h3>
          <p>
            After puberty, functional thymic tissue progressively decreases and
            is increasingly replaced by adipose tissue.
          </p>
        `,

        embryology: `
          <h2>Thymus Embryology</h2>

          <p>
            The thymus develops primarily from the third pharyngeal pouch.
            Developing thymic tissue descends into the superior mediastinum.
          </p>
        `
      }
    },


    // ============================================================
    // LYMPHATIC VESSELS
    // ============================================================

    {
      id: "lymphatic-vessels",
      name: "Lymphatic Vessels",
      modelPath: "models/lymphatic/vessels/",
      modelFile: "lymphatic_vessels.glb",

      notes: {

        anatomy: `
          <h2>Lymphatic Vessel Anatomy</h2>

          <p>
            Lymphatic vessels form a network that collects excess interstitial
            fluid from tissues and returns it to the venous circulation.
          </p>

          <h3>Components</h3>
          <ul>
            <li>Lymphatic capillaries.</li>
            <li>Collecting lymphatic vessels.</li>
            <li>Lymphatic trunks.</li>
            <li>Lymphatic ducts.</li>
          </ul>

          <h3>Major Ducts</h3>
          <ul>
            <li><strong>Thoracic duct:</strong> drains most of the body.</li>
            <li><strong>Right lymphatic duct:</strong> drains the right upper quadrant of the body.</li>
          </ul>
        `,

        physiology: `
          <h2>Lymphatic Vessel Physiology</h2>

          <p>
            Lymphatic vessels return excess interstitial fluid and proteins to
            the bloodstream and transport immune cells and absorbed lipids.
          </p>

          <h3>Lymph Movement</h3>
          <ul>
            <li>Skeletal muscle contraction.</li>
            <li>Respiratory movements.</li>
            <li>Intrinsic smooth muscle contraction.</li>
            <li>One-way valves.</li>
            <li>Arterial pulsation and body movement.</li>
          </ul>
        `,

        biochemistry: `
          <h2>Lymphatic Biochemistry</h2>

          <p>
            Lymph contains water, electrolytes, plasma proteins, lymphocytes,
            lipids and other substances collected from interstitial spaces.
          </p>

          <h3>Lipid Transport</h3>
          <p>
            Specialized intestinal lymphatic vessels called lacteals absorb
            dietary lipids in the form of chylomicrons and transport them through
            the lymphatic system before they enter the bloodstream.
          </p>
        `,

        pathology: `
          <h2>Lymphatic Vessel Pathology</h2>

          <h3>Lymphedema</h3>
          <p>
            Lymphedema occurs when lymphatic drainage is impaired, causing
            accumulation of protein-rich interstitial fluid.
          </p>

          <h3>Primary Lymphedema</h3>
          <p>
            Results from developmental abnormalities of the lymphatic system.
          </p>

          <h3>Secondary Lymphedema</h3>
          <p>
            May result from surgery, malignancy, radiation, trauma, infection or
            obstruction of lymphatic drainage.
          </p>
        `
      }
    },


    // ============================================================
    // TONSILS
    // ============================================================

    {
      id: "tonsils",
      name: "Tonsils",
      modelPath: "models/lymphatic/tonsils/",
      modelFile: "tonsils.glb",

      notes: {

        anatomy: `
          <h2>Tonsil Anatomy</h2>

          <p>
            Tonsils are collections of lymphoid tissue located around the entrance
            to the respiratory and digestive tracts.
          </p>

          <h3>Major Tonsillar Groups</h3>
          <ul>
            <li><strong>Palatine tonsils:</strong> located in the oropharynx.</li>
            <li><strong>Pharyngeal tonsil:</strong> located in the roof of the nasopharynx.</li>
            <li><strong>Lingual tonsils:</strong> located at the posterior tongue.</li>
            <li><strong>Tubal tonsils:</strong> located near the openings of the auditory tubes.</li>
          </ul>

          <h3>Waldeyer Ring</h3>
          <p>
            These lymphoid structures form a ring of immune tissue surrounding
            the entrance to the upper respiratory and digestive tracts.
          </p>
        `,

        physiology: `
          <p>
            Tonsils sample inhaled and ingested material and contribute to early
            immune recognition of pathogens entering the body.
          </p>
        `,

        immunology: `
          <p>
            Tonsillar lymphoid tissue contains B cells, T cells, antigen-presenting
            cells and germinal centers involved in adaptive immune responses.
          </p>
        `,

        pathology: `
          <h2>Tonsillar Pathology</h2>

          <h3>Tonsillitis</h3>
          <p>
            Tonsillitis is inflammation of the tonsils and may be caused by viral
            or bacterial infections.
          </p>

          <h3>Peritonsillar Abscess</h3>
          <p>
            A peritonsillar abscess is a localized collection of pus adjacent to
            the tonsil and can cause severe unilateral throat pain, dysphagia and
            difficulty opening the mouth.
          </p>
        `
      }
    },


    // ============================================================
    // BONE MARROW
    // ============================================================

    {
      id: "bone-marrow",
      name: "Bone Marrow",
      modelPath: "models/lymphatic/bone-marrow/",
      modelFile: "bone_marrow.glb",

      notes: {

        anatomy: `
          <h2>Bone Marrow Anatomy</h2>

          <p>
            Bone marrow is a specialized tissue located within the medullary
            cavities of bones and is essential for production of blood cells.
          </p>

          <h3>Types</h3>
          <ul>
            <li><strong>Red marrow:</strong> active hematopoietic tissue.</li>
            <li><strong>Yellow marrow:</strong> predominantly adipose tissue.</li>
          </ul>
        `,

        physiology: `
          <h2>Bone Marrow Physiology</h2>

          <p>
            Bone marrow is the primary site of hematopoiesis after birth.
          </p>

          <ul>
            <li>Erythrocyte production.</li>
            <li>Leukocyte production.</li>
            <li>Platelet production through megakaryocytes.</li>
            <li>Development of lymphocyte precursors.</li>
          </ul>
        `,

        immunology: `
          <h2>Bone Marrow Immunology</h2>

          <p>
            B lymphocytes undergo important stages of development and maturation
            within the bone marrow. Hematopoietic stem cells also generate
            precursors of many innate and adaptive immune cells.
          </p>
        `,

        pathology: `
          <h2>Bone Marrow Pathology</h2>

          <ul>
            <li>Leukemia.</li>
            <li>Aplastic anemia.</li>
            <li>Myelodysplastic syndromes.</li>
            <li>Myeloproliferative neoplasms.</li>
            <li>Multiple myeloma.</li>
            <li>Bone marrow infiltration by metastatic cancer.</li>
          </ul>
        `,

        histology: `
          <h2>Bone Marrow Histology</h2>

          <p>
            Bone marrow contains hematopoietic cells at different stages of
            maturation supported by a vascular stromal microenvironment.
          </p>
        `
      }
    },


    // ============================================================
    // APPENDIX
    // ============================================================

    {
      id: "appendix-lymphoid-tissue",
      name: "Appendix",
      modelPath: null,
      modelFile: null,

      notes: {

        anatomy: `
          <h2>Appendix and Lymphoid Tissue</h2>

          <p>
            The vermiform appendix is a narrow diverticulum arising from the
            caecum. Its wall contains abundant lymphoid tissue, particularly
            during childhood and early adulthood.
          </p>
        `,

        physiology: `
          <p>
            The lymphoid tissue of the appendix participates in mucosal immune
            surveillance within the gastrointestinal tract.
          </p>
        `,

        immunology: `
          <p>
            Lymphoid follicles within the appendix can participate in immune
            responses to intestinal antigens and microorganisms.
          </p>
        `,

        pathology: `
          <h2>Appendiceal Pathology</h2>

          <p>
            Acute appendicitis is inflammation of the appendix, commonly associated
            with obstruction of its lumen and subsequent bacterial proliferation.
          </p>
        `
      }
    }
  ]
};