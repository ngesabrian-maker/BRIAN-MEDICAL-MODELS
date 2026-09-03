export const digestiveSystem = {
  id: "digestive",
  name: "Digestive System",

  organs: [

    // =========================================================
    // LIVER
    // =========================================================
    {
      id: "liver",
      name: "Liver",
      modelPath: "models/digestive/liver/",
      modelFile: "liver_segments.glb",

      notes: {

        anatomy: `
          <h2>Liver Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The liver is the largest internal organ and the largest gland in the human body.
            It lies predominantly in the right upper quadrant of the abdomen, immediately below
            the diaphragm. A smaller portion extends into the left upper quadrant.
          </p>

          <p>
            The liver performs numerous functions including metabolism of carbohydrates, proteins
            and lipids; synthesis of plasma proteins; detoxification and biotransformation of
            substances; storage of nutrients; production and secretion of bile; regulation of
            blood glucose; and immune surveillance.
          </p>

          <h3>Surfaces</h3>
          <ul>
            <li><strong>Diaphragmatic surface:</strong> superior and anterior surface related to the diaphragm.</li>
            <li><strong>Visceral surface:</strong> inferior surface related to abdominal organs.</li>
          </ul>

          <h3>Lobes</h3>
          <ul>
            <li><strong>Right lobe:</strong> largest anatomical lobe.</li>
            <li><strong>Left lobe:</strong> smaller lobe separated from the right lobe by the falciform ligament.</li>
            <li><strong>Caudate lobe:</strong> located on the posterior visceral surface.</li>
            <li><strong>Quadrate lobe:</strong> located on the inferior visceral surface.</li>
          </ul>

          <h3>Functional Segmentation</h3>
          <p>
            Functionally, the liver is divided into eight Couinaud segments based on the distribution
            of the portal vein, hepatic artery and bile ducts.
          </p>

          <h3>Porta Hepatis</h3>
          <p>
            The porta hepatis is a transverse fissure on the visceral surface through which major
            vessels, ducts and nerves enter or leave the liver.
          </p>

          <ul>
            <li>Portal vein</li>
            <li>Hepatic artery</li>
            <li>Hepatic ducts</li>
            <li>Lymphatic vessels</li>
            <li>Autonomic nerves</li>
          </ul>

          <h3>Blood Supply</h3>
          <p>
            The liver has a dual blood supply.
          </p>

          <ul>
            <li><strong>Portal vein:</strong> supplies most hepatic blood flow and carries nutrient-rich blood from the gastrointestinal tract and spleen.</li>
            <li><strong>Hepatic artery:</strong> supplies oxygenated arterial blood.</li>
          </ul>

          <h3>Venous Drainage</h3>
          <p>
            Blood leaves the liver through the hepatic veins, which drain into the inferior vena cava.
          </p>

          <h3>Biliary Drainage</h3>
          <p>
            Bile produced by hepatocytes drains through progressively larger bile ducts into the
            right and left hepatic ducts. These unite to form the common hepatic duct.
          </p>

          <h3>Peritoneal Relations</h3>
          <p>
            Much of the liver is covered by visceral peritoneum. The bare area is directly related
            to the diaphragm without an intervening layer of peritoneum.
          </p>
        `,

        histology: `
          <h2>Liver Histology</h2>

          <h3>Hepatocytes</h3>
          <p>
            Hepatocytes are the principal functional cells of the liver. They are metabolically
            active cells involved in protein synthesis, carbohydrate metabolism, lipid metabolism,
            detoxification and bile production.
          </p>

          <h3>Hepatic Lobules</h3>
          <p>
            The classical hepatic lobule is organized around a central vein. Hepatic cords radiate
            from the central vein and are separated by hepatic sinusoids.
          </p>

          <h3>Portal Triad</h3>
          <p>
            Portal triads contain branches of the portal vein, hepatic artery and bile duct.
          </p>

          <h3>Sinusoids</h3>
          <p>
            Hepatic sinusoids are specialized vascular channels that allow exchange between blood
            and hepatocytes.
          </p>

          <h3>Kupffer Cells</h3>
          <p>
            Kupffer cells are specialized macrophages located within hepatic sinusoids. They remove
            microorganisms, damaged cells and cellular debris from portal and systemic blood.
          </p>

          <h3>Stellate Cells</h3>
          <p>
            Hepatic stellate cells are located in the space of Disse. They participate in vitamin A
            storage and, when activated during chronic liver injury, contribute to hepatic fibrosis.
          </p>
        `,

        physiology: `
          <h2>Liver Physiology</h2>

          <h3>Carbohydrate Metabolism</h3>
          <ul>
            <li>Glycogenesis</li>
            <li>Glycogenolysis</li>
            <li>Gluconeogenesis</li>
          </ul>

          <p>
            The liver helps maintain blood glucose concentration between meals by releasing glucose
            from glycogen and synthesizing glucose from non-carbohydrate substrates.
          </p>

          <h3>Protein Metabolism</h3>
          <p>
            The liver synthesizes albumin and many coagulation factors. It also metabolizes amino
            acids and converts toxic ammonia into urea.
          </p>

          <h3>Lipid Metabolism</h3>
          <p>
            Hepatic cells synthesize and metabolize fatty acids, triglycerides, cholesterol and
            lipoproteins.
          </p>

          <h3>Bile Production</h3>
          <p>
            Hepatocytes produce bile, which facilitates digestion and absorption of dietary lipids
            and fat-soluble vitamins.
          </p>

          <h3>Detoxification</h3>
          <p>
            The liver chemically modifies many drugs, hormones, toxins and metabolic products,
            making them easier to eliminate.
          </p>

          <h3>Storage</h3>
          <p>
            The liver stores glycogen and contributes to storage of vitamins and minerals including
            iron and copper.
          </p>
        `,

        biochemistry: `
          <h2>Liver Biochemistry</h2>

          <h3>Urea Cycle</h3>
          <p>
            Ammonia generated during amino acid metabolism is converted into urea in the liver.
            Urea is subsequently transported through the blood to the kidneys for excretion.
          </p>

          <h3>Bilirubin Metabolism</h3>
          <p>
            Heme degradation produces unconjugated bilirubin. Hepatocytes take up bilirubin,
            conjugate it primarily with glucuronic acid, and excrete conjugated bilirubin into bile.
          </p>

          <h3>Drug Metabolism</h3>
          <p>
            Hepatic drug metabolism commonly involves Phase I reactions such as oxidation, reduction
            and hydrolysis, followed by Phase II conjugation reactions.
          </p>

          <h3>Cytochrome P450</h3>
          <p>
            Cytochrome P450 enzymes participate in the metabolism of numerous medications,
            endogenous compounds and environmental chemicals.
          </p>

          <h3>Plasma Proteins</h3>
          <p>
            The liver synthesizes albumin and many coagulation proteins. Reduced synthetic function
            may therefore produce hypoalbuminemia and coagulopathy.
          </p>
        `,

        pathology: `
          <h2>Liver Pathology</h2>

          <h3>Hepatitis</h3>
          <p>
            Hepatitis refers to inflammation of the liver and may result from infectious,
            autoimmune, toxic, metabolic or drug-related causes.
          </p>

          <h3>Viral Hepatitis</h3>
          <ul>
            <li>Hepatitis A</li>
            <li>Hepatitis B</li>
            <li>Hepatitis C</li>
            <li>Hepatitis D</li>
            <li>Hepatitis E</li>
          </ul>

          <h3>Fatty Liver Disease</h3>
          <p>
            Hepatic steatosis involves abnormal accumulation of triglycerides within hepatocytes.
            Persistent injury can progress to inflammation, fibrosis and cirrhosis.
          </p>

          <h3>Cirrhosis</h3>
          <p>
            Cirrhosis is advanced chronic liver disease characterized by fibrosis and regenerative
            nodules that disrupt normal hepatic architecture.
          </p>

          <h3>Portal Hypertension</h3>
          <p>
            Increased resistance to portal blood flow can produce portal hypertension, leading to
            complications such as ascites, splenomegaly, varices and portosystemic collateral vessels.
          </p>

          <h3>Hepatic Failure</h3>
          <p>
            Severe loss of hepatic function may cause jaundice, coagulopathy, hypoalbuminemia,
            hypoglycemia, encephalopathy and accumulation of toxic metabolites.
          </p>

          <h3>Hepatic Encephalopathy</h3>
          <p>
            Hepatic encephalopathy is a neuropsychiatric syndrome associated with severe liver
            dysfunction and accumulation of substances such as ammonia.
          </p>
        `,

        microbiology: `
          <h2>Liver Microbiology</h2>

          <h3>Important Infectious Causes of Hepatitis</h3>
          <ul>
            <li><strong>Hepatitis A virus:</strong> usually causes acute hepatitis.</li>
            <li><strong>Hepatitis B virus:</strong> may cause acute or chronic hepatitis and can lead to cirrhosis and hepatocellular carcinoma.</li>
            <li><strong>Hepatitis C virus:</strong> frequently produces chronic infection and progressive liver disease.</li>
            <li><strong>Hepatitis E virus:</strong> commonly causes acute hepatitis and can be particularly severe during pregnancy.</li>
          </ul>

          <h3>Liver Abscess</h3>
          <p>
            Hepatic abscesses may be bacterial or parasitic. Common bacterial organisms include
            enteric Gram-negative organisms and anaerobes depending on the source.
          </p>
        `,

        parasitology: `
          <h2>Liver Parasitology</h2>

          <h3>Entamoeba histolytica</h3>
          <p>
            Entamoeba histolytica can spread from the intestine through the portal circulation
            and produce an amoebic liver abscess.
          </p>

          <h3>Schistosomiasis</h3>
          <p>
            Schistosoma species can produce chronic hepatic disease. Egg deposition may cause
            periportal fibrosis and portal hypertension.
          </p>

          <h3>Echinococcus granulosus</h3>
          <p>
            Echinococcus can produce hydatid cysts in the liver. Cysts may remain asymptomatic
            or produce abdominal symptoms and complications if they rupture.
          </p>
        `,

        clinical: `
          <h2>Liver Clinical Correlations</h2>

          <ul>
            <li><strong>Jaundice:</strong> yellow discoloration caused by increased bilirubin.</li>
            <li><strong>Ascites:</strong> accumulation of fluid within the peritoneal cavity.</li>
            <li><strong>Hepatomegaly:</strong> enlargement of the liver.</li>
            <li><strong>Splenomegaly:</strong> may accompany portal hypertension.</li>
            <li><strong>Esophageal varices:</strong> dilated collateral veins associated with portal hypertension.</li>
            <li><strong>Hepatic encephalopathy:</strong> neurological dysfunction associated with severe hepatic impairment.</li>
            <li><strong>Coagulopathy:</strong> impaired synthesis of coagulation factors.</li>
          </ul>
        `,

        keyFacts: `
          <h2>High-Yield Liver Facts</h2>
          <ul>
            <li>The liver is the largest internal organ and largest gland.</li>
            <li>The portal vein provides most hepatic blood flow.</li>
            <li>The liver receives both portal venous and arterial blood.</li>
            <li>Hepatocytes produce bile.</li>
            <li>The liver converts ammonia to urea.</li>
            <li>The liver synthesizes albumin and many coagulation factors.</li>
            <li>Kupffer cells are resident hepatic macrophages.</li>
            <li>Hepatic stellate cells contribute to fibrosis when activated.</li>
            <li>Cirrhosis disrupts normal hepatic architecture.</li>
            <li>Portal hypertension can produce ascites and varices.</li>
          </ul>
        `
      },

      parts: [
        {
          id: "right-lobe",
          name: "Right Lobe",
          modelPath: "models/digestive/liver/",
          modelFile: "right_lobe.glb",
          notes: {
            anatomy: `
              <h2>Right Lobe of the Liver</h2>
              <p>
                The right lobe is the largest anatomical lobe of the liver. It occupies much of the
                right upper quadrant and is related superiorly to the diaphragm and inferiorly to
                abdominal organs including the right kidney and hepatic flexure.
              </p>
            `,
            physiology: `
              <p>
                The right lobe contains hepatic tissue participating in metabolism, bile production,
                detoxification, protein synthesis and storage.
              </p>
            `
          }
        },

        {
          id: "left-lobe",
          name: "Left Lobe",
          modelPath: "models/digestive/liver/",
          modelFile: "left_lobe.glb",
          notes: {
            anatomy: `
              <h2>Left Lobe of the Liver</h2>
              <p>
                The left lobe is smaller than the right lobe and extends across the upper abdomen
                toward the left side.
              </p>
            `,
            physiology: `
              <p>
                Like the right lobe, the left lobe contains hepatocytes performing metabolic,
                synthetic and biliary functions.
              </p>
            `
          }
        },

        {
          id: "caudate-lobe",
          name: "Caudate Lobe",
          modelPath: "models/digestive/liver/",
          modelFile: "caudate_lobe.glb",
          notes: {
            anatomy: `
              <h2>Caudate Lobe</h2>
              <p>
                The caudate lobe is located on the posterior visceral surface of the liver between
                the inferior vena cava and the fissure for the ligamentum venosum.
              </p>
            `
          }
        },

        {
          id: "quadrate-lobe",
          name: "Quadrate Lobe",
          notes: {
            anatomy: `
              <h2>Quadrate Lobe</h2>
              <p>
                The quadrate lobe lies on the inferior visceral surface between the gallbladder
                fossa and the fissure for the ligamentum teres.
              </p>
            `
          }
        },

        {
          id: "porta-hepatis",
          name: "Porta Hepatis",
          notes: {
            anatomy: `
              <h2>Porta Hepatis</h2>
              <p>
                The porta hepatis is the main gateway through which the hepatic artery, portal vein,
                bile ducts, lymphatic vessels and nerves enter or leave the liver.
              </p>
            `
          }
        }
      ]
    },


    // =========================================================
    // STOMACH
    // =========================================================
    {
      id: "stomach",
      name: "Stomach",
      modelPath: "models/digestive/stomach/",
      modelFile: "stomach.glb",

      notes: {

        anatomy: `
          <h2>Stomach Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The stomach is a hollow muscular organ located between the esophagus and duodenum.
            It functions as a temporary reservoir for ingested food and contributes to mechanical
            and chemical digestion.
          </p>

          <h3>Regions</h3>
          <ul>
            <li><strong>Cardia:</strong> region surrounding the gastroesophageal junction.</li>
            <li><strong>Fundus:</strong> superior portion located above the level of the cardia.</li>
            <li><strong>Body:</strong> largest central region.</li>
            <li><strong>Pyloric antrum:</strong> distal region involved in mixing and regulation of gastric emptying.</li>
            <li><strong>Pyloric canal:</strong> connects the stomach with the duodenum.</li>
          </ul>

          <h3>Curvatures</h3>
          <ul>
            <li><strong>Greater curvature</strong></li>
            <li><strong>Lesser curvature</strong></li>
          </ul>

          <h3>Wall Layers</h3>
          <ol>
            <li>Mucosa</li>
            <li>Submucosa</li>
            <li>Muscularis externa</li>
            <li>Serosa</li>
          </ol>

          <h3>Muscular Layers</h3>
          <p>
            The stomach has three major layers of smooth muscle:
          </p>

          <ul>
            <li>Inner oblique layer</li>
            <li>Middle circular layer</li>
            <li>Outer longitudinal layer</li>
          </ul>

          <h3>Blood Supply</h3>
          <p>
            The stomach receives blood primarily from branches of the celiac trunk, including
            the left and right gastric arteries and gastroepiploic vessels.
          </p>
        `,

        histology: `
          <h2>Stomach Histology</h2>

          <h3>Gastric Mucosa</h3>
          <p>
            The stomach is lined by simple columnar epithelium containing gastric pits that lead
            to gastric glands.
          </p>

          <h3>Parietal Cells</h3>
          <p>
            Parietal cells secrete hydrochloric acid and intrinsic factor.
          </p>

          <h3>Chief Cells</h3>
          <p>
            Chief cells produce pepsinogen, which is converted to active pepsin in an acidic
            environment.
          </p>

          <h3>Mucous Cells</h3>
          <p>
            Mucous cells produce mucus and bicarbonate that contribute to protection of the gastric
            epithelium.
          </p>

          <h3>Enteroendocrine Cells</h3>
          <ul>
            <li><strong>G cells:</strong> secrete gastrin.</li>
            <li><strong>D cells:</strong> secrete somatostatin.</li>
            <li><strong>ECL cells:</strong> secrete histamine.</li>
          </ul>
        `,

        physiology: `
          <h2>Stomach Physiology</h2>

          <h3>Storage</h3>
          <p>
            The stomach temporarily stores ingested food and allows meals to be delivered gradually
            to the duodenum.
          </p>

          <h3>Mechanical Digestion</h3>
          <p>
            Gastric smooth muscle contractions mix food with gastric secretions to form a semi-liquid
            material called chyme.
          </p>

          <h3>Acid Secretion</h3>
          <p>
            Hydrochloric acid creates a strongly acidic gastric environment. This promotes protein
            digestion, facilitates conversion of pepsinogen to pepsin and contributes to destruction
            of many ingested microorganisms.
          </p>

          <h3>Gastric Emptying</h3>
          <p>
            Gastric emptying is regulated by coordinated contractions of the stomach and the pyloric
            sphincter. Signals from the duodenum influence the rate of emptying.
          </p>

          <h3>Intrinsic Factor</h3>
          <p>
            Parietal cells secrete intrinsic factor, which is required for absorption of vitamin B12
            in the terminal ileum.
          </p>
        `,

        biochemistry: `
          <h2>Stomach Biochemistry</h2>

          <h3>Hydrochloric Acid</h3>
          <p>
            Gastric acid is produced by the H+/K+ ATPase of parietal cells. Hydrogen ions are
            secreted into the gastric lumen while potassium ions are exchanged.
          </p>

          <h3>Pepsin</h3>
          <p>
            Chief cells secrete pepsinogen. Gastric acid promotes its conversion into pepsin,
            an enzyme that begins significant protein digestion.
          </p>

          <h3>Mucosal Protection</h3>
          <p>
            Gastric mucus, bicarbonate secretion, epithelial tight junctions, mucosal blood flow
            and prostaglandins protect the stomach against acid and digestive enzymes.
          </p>

          <h3>Gastrin</h3>
          <p>
            Gastrin stimulates gastric acid secretion and promotes gastric mucosal growth and
            motility.
          </p>
        `,

        microbiology: `
          <h2>Stomach Microbiology</h2>

          <h3>Helicobacter pylori</h3>
          <p>
            Helicobacter pylori is a spiral-shaped bacterium adapted to colonization of the gastric
            mucosa. It is strongly associated with chronic gastritis and peptic ulcer disease and
            increases the risk of gastric adenocarcinoma and gastric MALT lymphoma.
          </p>

          <h3>Urease</h3>
          <p>
            H. pylori produces urease, which generates ammonia from urea and helps buffer the acidic
            gastric environment surrounding the organism.
          </p>
        `,

        pathology: `
          <h2>Stomach Pathology</h2>

          <h3>Gastritis</h3>
          <p>
            Gastritis is inflammation of the gastric mucosa. Causes include H. pylori infection,
            non-steroidal anti-inflammatory drugs, alcohol, autoimmune disease and other insults.
          </p>

          <h3>Peptic Ulcer Disease</h3>
          <p>
            Peptic ulcers are mucosal defects extending through the muscularis mucosae, commonly
            involving the stomach or duodenum. Important causes include H. pylori infection and
            NSAID use.
          </p>

          <h3>Gastric Carcinoma</h3>
          <p>
            Gastric adenocarcinoma is a malignant epithelial tumor of the stomach. Risk factors
            include H. pylori infection, certain dietary factors, smoking and genetic susceptibility.
          </p>

          <h3>Pyloric Stenosis</h3>
          <p>
            Pyloric stenosis involves narrowing of the pyloric outlet and can impair gastric
            emptying. Infantile hypertrophic pyloric stenosis is an important pediatric form.
          </p>

          <h3>Gastrointestinal Bleeding</h3>
          <p>
            Gastric ulcers, erosive gastritis and malignancy can cause upper gastrointestinal
            bleeding, which may present with hematemesis or melena.
          </p>
        `,

        pharmacology: `
          <h2>Stomach Pharmacology</h2>

          <ul>
            <li><strong>Proton pump inhibitors:</strong> inhibit the gastric H+/K+ ATPase and markedly reduce acid secretion.</li>
            <li><strong>H2 receptor antagonists:</strong> reduce histamine-mediated gastric acid secretion.</li>
            <li><strong>Antacids:</strong> chemically neutralize gastric acid.</li>
            <li><strong>Sucralfate:</strong> forms a protective barrier over damaged mucosa.</li>
            <li><strong>Misoprostol:</strong> prostaglandin analogue that reduces acid secretion and enhances mucosal protection.</li>
            <li><strong>Prokinetic drugs:</strong> may increase gastrointestinal motility in selected conditions.</li>
          </ul>

          <h3>H. pylori Eradication</h3>
          <p>
            H. pylori infection is treated using combinations of acid suppression and antimicrobial
            therapy according to current eradication guidelines and local resistance patterns.
          </p>
        `,

        clinical: `
          <h2>Clinical Stomach Correlations</h2>

          <ul>
            <li><strong>Epigastric pain:</strong> may occur in gastritis and peptic ulcer disease.</li>
            <li><strong>Hematemesis:</strong> vomiting of blood suggests upper gastrointestinal bleeding.</li>
            <li><strong>Melena:</strong> black, tarry stool may result from upper gastrointestinal bleeding.</li>
            <li><strong>Early satiety:</strong> may occur with impaired gastric emptying or gastric malignancy.</li>
            <li><strong>Persistent vomiting:</strong> may indicate obstruction or severe gastric dysfunction.</li>
          </ul>
        `,

        keyFacts: `
          <h2>High-Yield Stomach Facts</h2>
          <ul>
            <li>The stomach lies between the esophagus and duodenum.</li>
            <li>Major regions include cardia, fundus, body and pyloric region.</li>
            <li>Parietal cells produce hydrochloric acid and intrinsic factor.</li>
            <li>Chief cells produce pepsinogen.</li>
            <li>G cells produce gastrin.</li>
            <li>D cells produce somatostatin.</li>
            <li>ECL cells release histamine.</li>
            <li>H. pylori is strongly associated with chronic gastritis and peptic ulcer disease.</li>
            <li>Vitamin B12 absorption requires intrinsic factor and occurs in the terminal ileum.</li>
          </ul>
        `
      },

      parts: [
        {
          id: "cardia",
          name: "Cardia",
          notes: {
            anatomy: `
              <h2>Gastric Cardia</h2>
              <p>
                The cardia is the region surrounding the gastroesophageal junction where the
                esophagus enters the stomach.
              </p>
            `
          }
        },

        {
          id: "fundus",
          name: "Fundus",
          notes: {
            anatomy: `
              <h2>Gastric Fundus</h2>
              <p>
                The fundus is the superior dome-shaped portion of the stomach located above the
                gastroesophageal junction.
              </p>
            `,
            physiology: `
              <p>
                The fundus contributes to storage of ingested food and contains acid- and
                enzyme-secreting gastric glands.
              </p>
            `
          }
        },

        {
          id: "body",
          name: "Body of Stomach",
          notes: {
            anatomy: `
              <h2>Body of the Stomach</h2>
              <p>
                The body is the largest region of the stomach and contains numerous gastric glands.
              </p>
            `,
            physiology: `
              <p>
                It contributes to storage, mixing, acid secretion and enzymatic digestion.
              </p>
            `
          }
        },

        {
          id: "pyloric-antrum",
          name: "Pyloric Antrum",
          notes: {
            anatomy: `
              <h2>Pyloric Antrum</h2>
              <p>
                The pyloric antrum is the distal portion of the stomach preceding the pyloric canal.
              </p>
            `,
            physiology: `
              <p>
                It participates in gastric mixing and contains G cells that secrete gastrin.
              </p>
            `
          }
        },

        {
          id: "pyloric-sphincter",
          name: "Pyloric Sphincter",
          notes: {
            anatomy: `
              <h2>Pyloric Sphincter</h2>
              <p>
                The pyloric sphincter is a thickened region of circular smooth muscle at the
                gastroduodenal junction.
              </p>
            `,
            physiology: `
              <p>
                It regulates the passage of gastric chyme into the duodenum and helps prevent
                excessive duodenogastric reflux.
              </p>
            `
          }
        }
      ]
    },


    // =========================================================
    // ESOPHAGUS
    // =========================================================
    {
      id: "esophagus",
      name: "Esophagus",
      modelPath: "models/digestive/esophagus/",
      modelFile: "esophagus.glb",

      notes: {
        anatomy: `
          <h2>Esophagus Anatomy</h2>
          <p>
            The esophagus is a muscular tube connecting the pharynx to the stomach. It passes
            through the neck and thorax before traversing the diaphragm through the esophageal hiatus.
          </p>

          <h3>Regions</h3>
          <ul>
            <li>Cervical esophagus</li>
            <li>Thoracic esophagus</li>
            <li>Abdominal esophagus</li>
          </ul>
        `,

        histology: `
          <h2>Esophageal Histology</h2>
          <p>
            The esophagus is lined predominantly by non-keratinized stratified squamous epithelium,
            providing resistance against mechanical abrasion from swallowed food.
          </p>
        `,

        physiology: `
          <h2>Esophageal Physiology</h2>
          <p>
            Coordinated peristaltic contractions propel swallowed material toward the stomach.
            The upper and lower esophageal sphincters help regulate passage and prevent reflux.
          </p>
        `,

        pathology: `
          <h2>Esophageal Pathology</h2>
          <ul>
            <li><strong>Gastroesophageal reflux disease:</strong> reflux of gastric contents into the esophagus.</li>
            <li><strong>Barrett esophagus:</strong> intestinal-type metaplasia associated with chronic reflux.</li>
            <li><strong>Achalasia:</strong> impaired relaxation of the lower esophageal sphincter with abnormal esophageal motility.</li>
            <li><strong>Esophageal carcinoma:</strong> malignant tumor arising from esophageal epithelium.</li>
            <li><strong>Esophageal varices:</strong> dilated veins associated particularly with portal hypertension.</li>
          </ul>
        `,

        clinical: `
          <h2>Esophageal Clinical Correlations</h2>
          <ul>
            <li>Dysphagia</li>
            <li>Odynophagia</li>
            <li>Heartburn</li>
            <li>Regurgitation</li>
            <li>Hematemesis from upper gastrointestinal bleeding</li>
          </ul>
        `
      }
    },


    // =========================================================
    // SMALL INTESTINE
    // =========================================================
    {
      id: "small-intestine",
      name: "Small Intestine",
      modelPath: "models/digestive/small-intestine/",
      modelFile: "small_intestine.glb",

      notes: {

        anatomy: `
          <h2>Small Intestine Anatomy</h2>

          <p>
            The small intestine extends from the pylorus of the stomach to the ileocecal junction.
            It is the principal site of enzymatic digestion and nutrient absorption.
          </p>

          <h3>Divisions</h3>
          <ol>
            <li><strong>Duodenum</strong></li>
            <li><strong>Jejunum</strong></li>
            <li><strong>Ileum</strong></li>
          </ol>

          <h3>Duodenum</h3>
          <p>
            The duodenum receives acidic chyme from the stomach as well as bile and pancreatic
            secretions.
          </p>

          <h3>Jejunum</h3>
          <p>
            The jejunum is specialized for absorption and contains numerous folds and villi.
          </p>

          <h3>Ileum</h3>
          <p>
            The ileum absorbs nutrients including bile salts and vitamin B12 and contains abundant
            lymphoid tissue, particularly Peyer's patches.
          </p>
        `,

        histology: `
          <h2>Small Intestine Histology</h2>
          <p>
            The small intestine contains circular folds, villi and microvilli that greatly increase
            the surface area available for digestion and absorption.
          </p>

          <ul>
            <li><strong>Enterocytes:</strong> major absorptive epithelial cells.</li>
            <li><strong>Goblet cells:</strong> produce mucus.</li>
            <li><strong>Paneth cells:</strong> contribute to innate antimicrobial defense.</li>
            <li><strong>Enteroendocrine cells:</strong> release gastrointestinal hormones.</li>
          </ul>
        `,

        physiology: `
          <h2>Small Intestine Physiology</h2>

          <h3>Digestion</h3>
          <p>
            Carbohydrates, proteins and lipids undergo enzymatic digestion within the small intestine.
          </p>

          <h3>Absorption</h3>
          <ul>
            <li>Carbohydrates → monosaccharides</li>
            <li>Proteins → amino acids and small peptides</li>
            <li>Lipids → fatty acids and monoglycerides</li>
            <li>Vitamins and minerals</li>
            <li>Water and electrolytes</li>
          </ul>

          <h3>Motility</h3>
          <p>
            Segmentation mixes intestinal contents while peristalsis propels material toward the
            large intestine.
          </p>
        `,

        pathology: `
          <h2>Small Intestinal Pathology</h2>

          <ul>
            <li><strong>Celiac disease:</strong> immune-mediated intestinal injury triggered by gluten in susceptible individuals.</li>
            <li><strong>Crohn disease:</strong> chronic inflammatory bowel disease that may involve any part of the gastrointestinal tract.</li>
            <li><strong>Intestinal obstruction:</strong> impaired passage of intestinal contents.</li>
            <li><strong>Malabsorption:</strong> impaired absorption of nutrients.</li>
            <li><strong>Small intestinal bacterial overgrowth:</strong> excessive bacterial colonization associated with malabsorption and gastrointestinal symptoms.</li>
          </ul>
        `,

        parasitology: `
          <h2>Small Intestinal Parasitology</h2>

          <ul>
            <li><strong>Giardia duodenalis:</strong> causes giardiasis and may produce malabsorption and diarrhea.</li>
            <li><strong>Ascaris lumbricoides:</strong> adult worms inhabit the small intestine.</li>
            <li><strong>Hookworms:</strong> attach to intestinal mucosa and may cause chronic blood loss and iron deficiency anemia.</li>
            <li><strong>Strongyloides stercoralis:</strong> can establish chronic intestinal infection and may cause hyperinfection in immunocompromised individuals.</li>
            <li><strong>Taenia species:</strong> adult tapeworms can inhabit the intestine.</li>
          </ul>
        `
      },

      parts: [
        {
          id: "duodenum",
          name: "Duodenum",
          notes: {
            anatomy: `
              <h2>Duodenum</h2>
              <p>
                The duodenum is the first portion of the small intestine. It receives gastric chyme,
                bile and pancreatic secretions.
              </p>
            `,
            physiology: `
              <p>
                It neutralizes acidic chyme and is an important site for the beginning of intestinal
                digestion and nutrient absorption.
              </p>
            `
          }
        },

        {
          id: "jejunum",
          name: "Jejunum",
          notes: {
            anatomy: `
              <h2>Jejunum</h2>
              <p>
                The jejunum forms the middle portion of the small intestine and has prominent
                mucosal folds and villi.
              </p>
            `,
            physiology: `
              <p>
                The jejunum is an important site of absorption of carbohydrates, amino acids,
                lipids, water, vitamins and minerals.
              </p>
            `
          }
        },

        {
          id: "ileum",
          name: "Ileum",
          notes: {
            anatomy: `
              <h2>Ileum</h2>
              <p>
                The ileum is the terminal portion of the small intestine and joins the large
                intestine at the ileocecal junction.
              </p>
            `,
            physiology: `
              <p>
                The ileum is particularly important for absorption of vitamin B12 and bile salts
                and contributes to immune surveillance through lymphoid tissue.
              </p>
            `
          }
        }
      ]
    },


    // =========================================================
    // LARGE INTESTINE
    // =========================================================
    {
      id: "large-intestine",
      name: "Large Intestine",
      modelPath: "models/digestive/large-intestine/",
      modelFile: "large_intestine.glb",

      notes: {

        anatomy: `
          <h2>Large Intestine Anatomy</h2>

          <p>
            The large intestine extends from the ileocecal junction to the anus. Its major functions
            include absorption of water and electrolytes, formation and storage of feces, and
            interaction with the intestinal microbiota.
          </p>

          <h3>Major Regions</h3>
          <ul>
            <li>Cecum</li>
            <li>Appendix</li>
            <li>Ascending colon</li>
            <li>Transverse colon</li>
            <li>Descending colon</li>
            <li>Sigmoid colon</li>
            <li>Rectum</li>
            <li>Anal canal</li>
          </ul>

          <h3>Characteristic Features</h3>
          <ul>
            <li>Taeniae coli</li>
            <li>Haustra</li>
            <li>Appendices epiploicae</li>
          </ul>
        `,

        histology: `
          <h2>Large Intestine Histology</h2>

          <p>
            The colon contains numerous straight intestinal glands and abundant goblet cells.
            Unlike the small intestine, it does not have villi.
          </p>
        `,

        physiology: `
          <h2>Large Intestine Physiology</h2>

          <ul>
            <li>Absorption of water</li>
            <li>Absorption of electrolytes</li>
            <li>Formation of feces</li>
            <li>Storage of fecal material</li>
            <li>Interaction with intestinal microbiota</li>
          </ul>

          <h3>Gut Microbiota</h3>
          <p>
            Colonic microorganisms ferment undigested carbohydrates and produce metabolites including
            short-chain fatty acids.
          </p>
        `,

        microbiology: `
          <h2>Large Intestinal Microbiology</h2>

          <p>
            The colon contains a dense microbial community consisting of bacteria and other
            microorganisms. These organisms participate in fermentation, vitamin metabolism,
            immune development and intestinal homeostasis.
          </p>
        `,

        pathology: `
          <h2>Large Intestinal Pathology</h2>

          <ul>
            <li><strong>Colorectal cancer:</strong> malignant neoplasm of the colon or rectum.</li>
            <li><strong>Ulcerative colitis:</strong> inflammatory bowel disease primarily affecting the colon.</li>
            <li><strong>Diverticular disease:</strong> formation of diverticula in the colonic wall.</li>
            <li><strong>Appendicitis:</strong> inflammation of the vermiform appendix.</li>
            <li><strong>Hemorrhoids:</strong> symptomatic enlargement of vascular structures in the anal region.</li>
            <li><strong>Constipation:</strong> difficult or infrequent passage of stool.</li>
            <li><strong>Diarrhea:</strong> increased frequency, liquidity or volume of stool.</li>
          </ul>
        `
      },

      parts: [
        {
          id: "cecum",
          name: "Cecum",
          notes: {
            anatomy: `
              <h2>Cecum</h2>
              <p>
                The cecum is the first part of the large intestine and receives contents from the
                terminal ileum through the ileocecal junction.
              </p>
            `
          }
        },

        {
          id: "appendix",
          name: "Vermiform Appendix",
          notes: {
            anatomy: `
              <h2>Vermiform Appendix</h2>
              <p>
                The appendix is a narrow, blind-ended tube arising from the cecum. It contains
                lymphoid tissue and has a role associated with intestinal immune function.
              </p>
            `,
            pathology: `
              <h3>Appendicitis</h3>
              <p>
                Acute appendicitis is inflammation of the appendix, commonly associated with
                obstruction of the appendiceal lumen.
              </p>
            `
          }
        },

        {
          id: "ascending-colon",
          name: "Ascending Colon",
          notes: {
            anatomy: `
              <h2>Ascending Colon</h2>
              <p>
                The ascending colon extends superiorly from the cecum toward the hepatic flexure.
              </p>
            `
          }
        },

        {
          id: "transverse-colon",
          name: "Transverse Colon",
          notes: {
            anatomy: `
              <h2>Transverse Colon</h2>
              <p>
                The transverse colon extends from the hepatic flexure to the splenic flexure.
              </p>
            `
          }
        },

        {
          id: "descending-colon",
          name: "Descending Colon",
          notes: {
            anatomy: `
              <h2>Descending Colon</h2>
              <p>
                The descending colon extends inferiorly from the splenic flexure toward the sigmoid colon.
              </p>
            `
          }
        },

        {
          id: "sigmoid-colon",
          name: "Sigmoid Colon",
          notes: {
            anatomy: `
              <h2>Sigmoid Colon</h2>
              <p>
                The sigmoid colon is an S-shaped segment connecting the descending colon with
                the rectum.
              </p>
            `
          }
        },

        {
          id: "rectum",
          name: "Rectum",
          notes: {
            anatomy: `
              <h2>Rectum</h2>
              <p>
                The rectum is the terminal portion of the large intestine and serves as a reservoir
                for fecal material before defecation.
              </p>
            `,
            physiology: `
              <p>
                Rectal distension contributes to activation of the defecation reflex.
              </p>
            `
          }
        },

        {
          id: "anal-canal",
          name: "Anal Canal",
          notes: {
            anatomy: `
              <h2>Anal Canal</h2>
              <p>
                The anal canal is the terminal portion of the gastrointestinal tract and contains
                internal and external anal sphincters.
              </p>
            `,
            physiology: `
              <p>
                Coordinated contraction and relaxation of the anal sphincters contributes to
                continence and controlled defecation.
              </p>
            `
          }
        }
      ]
    },


    // =========================================================
    // PANCREAS
    // =========================================================
    {
      id: "pancreas",
      name: "Pancreas",
      modelPath: "models/digestive/pancreas/",
      modelFile: "pancreas.glb",

      notes: {

        anatomy: `
          <h2>Pancreas Anatomy</h2>

          <p>
            The pancreas is an elongated gland located posterior to the stomach. It has both
            exocrine and endocrine functions.
          </p>

          <h3>Parts</h3>
          <ul>
            <li>Head</li>
            <li>Uncinate process</li>
            <li>Neck</li>
            <li>Body</li>
            <li>Tail</li>
          </ul>

          <h3>Pancreatic Duct</h3>
          <p>
            The main pancreatic duct carries pancreatic secretions toward the duodenum. It commonly
            joins the common bile duct before entering the duodenum through the hepatopancreatic
            ampulla.
          </p>
        `,

        histology: `
          <h2>Pancreatic Histology</h2>

          <h3>Exocrine Pancreas</h3>
          <p>
            Acinar cells produce digestive enzymes and ductal cells contribute bicarbonate-rich
            fluid.
          </p>

          <h3>Endocrine Pancreas</h3>
          <p>
            Islets of Langerhans contain several endocrine cell types.
          </p>

          <ul>
            <li><strong>Beta cells:</strong> insulin.</li>
            <li><strong>Alpha cells:</strong> glucagon.</li>
            <li><strong>Delta cells:</strong> somatostatin.</li>
            <li><strong>PP cells:</strong> pancreatic polypeptide.</li>
          </ul>
        `,

        physiology: `
          <h2>Pancreatic Physiology</h2>

          <h3>Exocrine Function</h3>
          <p>
            The pancreas releases enzymes responsible for digestion of carbohydrates, proteins,
            lipids and nucleic acids.
          </p>

          <h3>Bicarbonate Secretion</h3>
          <p>
            Pancreatic bicarbonate helps neutralize acidic gastric contents entering the duodenum.
          </p>

          <h3>Endocrine Function</h3>
          <p>
            Insulin lowers blood glucose, while glucagon raises blood glucose during fasting.
          </p>
        `,

        biochemistry: `
          <h2>Pancreatic Biochemistry</h2>

          <ul>
            <li>Pancreatic amylase digests carbohydrates.</li>
            <li>Pancreatic lipase digests triglycerides.</li>
            <li>Proteases such as trypsin and chymotrypsin digest proteins.</li>
            <li>Nucleases digest nucleic acids.</li>
          </ul>

          <p>
            Many pancreatic proteases are secreted as inactive zymogens, reducing the risk of
            pancreatic autodigestion.
          </p>
        `,

        pathology: `
          <h2>Pancreatic Pathology</h2>

          <h3>Acute Pancreatitis</h3>
          <p>
            Acute pancreatitis is an inflammatory condition characterized by inappropriate activation
            of pancreatic digestive enzymes within the pancreas. Common causes include gallstones
            and alcohol use.
          </p>

          <h3>Chronic Pancreatitis</h3>
          <p>
            Chronic pancreatitis causes progressive pancreatic injury and fibrosis, potentially
            resulting in exocrine insufficiency and diabetes mellitus.
          </p>

          <h3>Pancreatic Cancer</h3>
          <p>
            Pancreatic ductal adenocarcinoma is an aggressive malignant tumor that commonly arises
            in the pancreatic head.
          </p>
        `,

        clinical: `
          <h2>Pancreatic Clinical Correlations</h2>
          <ul>
            <li>Epigastric abdominal pain</li>
            <li>Radiation of pain to the back</li>
            <li>Steatorrhea from exocrine insufficiency</li>
            <li>Diabetes mellitus from endocrine dysfunction</li>
            <li>Obstructive jaundice from tumors involving the pancreatic head</li>
          </ul>
        `
      }
    },


    // =========================================================
    // GALLBLADDER
    // =========================================================
    {
      id: "gallbladder",
      name: "Gallbladder",
      modelPath: "models/digestive/gallbladder/",
      modelFile: "gallbladder.glb",

      notes: {

        anatomy: `
          <h2>Gallbladder Anatomy</h2>
          <p>
            The gallbladder is a pear-shaped hollow organ located on the visceral surface of the
            liver. It stores and concentrates bile produced by hepatocytes.
          </p>

          <h3>Parts</h3>
          <ul>
            <li>Fundus</li>
            <li>Body</li>
            <li>Neck</li>
            <li>Cystic duct</li>
          </ul>
        `,

        physiology: `
          <h2>Gallbladder Physiology</h2>
          <p>
            During fasting, bile is stored and concentrated within the gallbladder. After a meal,
            particularly a fatty meal, cholecystokinin stimulates gallbladder contraction and
            relaxation of the sphincter of Oddi, promoting bile delivery into the duodenum.
          </p>
        `,

        biochemistry: `
          <h2>Gallbladder Biochemistry</h2>
          <p>
            Bile contains bile acids, phospholipids, cholesterol, bilirubin, electrolytes and water.
            Bile acids facilitate emulsification and absorption of dietary lipids and fat-soluble
            vitamins.
          </p>
        `,

        pathology: `
          <h2>Gallbladder Pathology</h2>

          <h3>Gallstones</h3>
          <p>
            Cholelithiasis refers to stones within the gallbladder. Stones may be composed primarily
            of cholesterol or pigment material.
          </p>

          <h3>Cholecystitis</h3>
          <p>
            Cholecystitis is inflammation of the gallbladder, commonly caused by obstruction of the
            cystic duct by a gallstone.
          </p>
        `,

        clinical: `
          <h2>Gallbladder Clinical Correlations</h2>
          <ul>
            <li>Right upper quadrant pain</li>
            <li>Postprandial pain after fatty meals</li>
            <li>Nausea and vomiting</li>
            <li>Fever in acute inflammation</li>
            <li>Jaundice when biliary obstruction involves larger ducts</li>
          </ul>
        `
      }
    },


    // =========================================================
    // RECTUM AND ANAL CANAL
    // =========================================================
    {
      id: "rectum",
      name: "Rectum and Anal Canal",
      modelPath: "models/digestive/rectum/",
      modelFile: "rectum.glb",

      notes: {

        anatomy: `
          <h2>Rectum and Anal Canal Anatomy</h2>
          <p>
            The rectum is the terminal portion of the large intestine. It continues inferiorly
            into the anal canal, which terminates at the anus.
          </p>

          <h3>Anal Sphincters</h3>
          <ul>
            <li><strong>Internal anal sphincter:</strong> involuntary smooth muscle.</li>
            <li><strong>External anal sphincter:</strong> voluntary skeletal muscle.</li>
          </ul>
        `,

        physiology: `
          <h2>Defecation Physiology</h2>
          <p>
            Accumulation of fecal material distends the rectum and activates sensory pathways.
            The defecation reflex involves autonomic and somatic neural pathways. Voluntary
            relaxation of the external anal sphincter permits controlled defecation.
          </p>
        `,

        pathology: `
          <h2>Rectal and Anal Pathology</h2>
          <ul>
            <li>Hemorrhoids</li>
            <li>Anal fissures</li>
            <li>Rectal prolapse</li>
            <li>Colorectal carcinoma</li>
            <li>Perianal abscesses</li>
            <li>Anal fistulae</li>
          </ul>
        `
      }
    }
  ]
};