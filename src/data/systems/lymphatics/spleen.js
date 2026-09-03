export const spleen =     {
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
    };