export const cardiovascularSystem = {
  id: "cardiovascular",
  name: "Cardiovascular System",

  organs: [

    // ============================================================
    // HEART
    // ============================================================
    {
      id: "heart",
      name: "Heart",
      modelPath: "models/heart/",
      modelFile: "beating-heart.glb",

      notes: {

        anatomy: `
          <h2>Heart Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The heart is a hollow muscular organ of the cardiovascular system that functions as a
            double pump. It maintains continuous blood circulation through the pulmonary and systemic
            circulations. The heart lies within the middle mediastinum of the thoracic cavity, <br><br> <img src="src/assets/images/heart-circulation.jpg" alt="Heart Location" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" /> <br> between 

            the lungs, posterior to the sternum and anterior to the vertebral column.
          </p>

          <p>
            The adult heart is approximately the size of a clenched fist and has a roughly conical
            shape. Its apex points inferiorly, anteriorly and toward the left, while its base is directed
            posteriorly and superiorly.
          </p>

          <h3>Major Divisions</h3>
          <ul>
            <li><strong>Right atrium</strong> – receives deoxygenated blood from the systemic circulation.</li>
            <li><strong>Right ventricle</strong> – pumps deoxygenated blood into the pulmonary circulation.</li>
            <li><strong>Left atrium</strong> – receives oxygenated blood from the pulmonary veins.</li>
            <li><strong>Left ventricle</strong> – pumps oxygenated blood into the systemic circulation.</li>
          </ul>

          <h3>Heart Chambers</h3>
          <p>
            The four chambers are separated by septa and connected through atrioventricular or
            semilunar valves that ensure predominantly unidirectional blood flow.
          </p>

          <h3>Cardiac Septa</h3>
          <ul>
            <li><strong>Interatrial septum</strong> – separates the right and left atria.</li>
            <li><strong>Interventricular septum</strong> – separates the right and left ventricles.</li>
            <li><strong>Atrioventricular septal region</strong> – contributes to separation between atrial and ventricular compartments.</li>
          </ul>

          <h3>Heart Valves</h3>
          <ul>
            <li><strong>Tricuspid valve</strong> – between the right atrium and right ventricle.</li>
            <li><strong>Mitral valve</strong> – between the left atrium and left ventricle.</li>
            <li><strong>Pulmonary valve</strong> – between the right ventricle and pulmonary trunk.</li>
            <li><strong>Aortic valve</strong> – between the left ventricle and ascending aorta.</li>
          </ul>

          <h3>Layers of the Heart Wall</h3>
          <ol>
            <li><strong>Endocardium</strong> – inner endothelial lining of the chambers and valves.</li>
            <li><strong>Myocardium</strong> – thick muscular layer responsible for contraction.</li>
            <li><strong>Epicardium</strong> – outer layer of the heart wall and visceral layer of serous pericardium.</li>
          </ol>
            <img src="src/assets/images/heart-wall.jpg" alt="Heart Wall Layers" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" />
          <h3>Pericardium</h3>
          <p>
            The heart is enclosed within the pericardial sac. The pericardium consists of a fibrous
            pericardium and a serous pericardium.
          </p>

          <ul>
            <li><strong>Fibrous pericardium</strong> – tough outer connective-tissue layer.</li>
            <li><strong>Parietal serous pericardium</strong> – lines the internal surface of the fibrous pericardium.</li>
            <li><strong>Visceral serous pericardium</strong> – covers the external surface of the heart.</li>
            <li><strong>Pericardial cavity</strong> – contains a small amount of lubricating fluid.</li>
          </ul>
            <img src="src/assets/images/pericardium.jpg" alt="Pericardium" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" />
          <h3>Great Vessels</h3>
          <ul>
            <li>Superior vena cava</li>
            <li>Inferior vena cava</li>
            <li>Pulmonary trunk</li>
            <li>Right and left pulmonary arteries</li>
            <li>Pulmonary veins</li>
            <li>Ascending aorta</li>
          </ul>

          <h3>Coronary Circulation</h3>
          <p>
            The myocardium receives its blood supply primarily through the right and left coronary
            arteries, which arise from the ascending aorta immediately above the aortic valve.
          </p>

          <ul>
            <li><strong>Right coronary artery</strong> – supplies portions of the right heart and, in many individuals, the SA and AV nodes.</li>
            <li><strong>Left coronary artery</strong> – divides mainly into the anterior interventricular artery and circumflex artery.</li>
            <li><strong>Anterior interventricular artery (LAD)</strong> – supplies much of the anterior ventricular myocardium and interventricular septum.</li>
            <li><strong>Circumflex artery</strong> – supplies portions of the left atrium and left ventricle.</li>
          </ul>

          <h3>Cardiac Venous Drainage</h3>
          <p>
            Most venous blood from the myocardium drains through the coronary sinus into the right
            atrium. Smaller cardiac veins may drain directly into cardiac chambers.
          </p>
        `,

        physiology: `
          <h2>Heart Physiology</h2>

          <h3>Primary Function</h3>
          <p>
            The heart functions as a muscular pump that maintains blood flow through two linked
            circulatory systems.
          </p>

          <ul>
            <li><strong>Pulmonary circulation</strong> – transports blood between the heart and lungs.</li>
            <li><strong>Systemic circulation</strong> – transports blood between the heart and body tissues.</li>
          </ul>

          <h3>Cardiac Cycle</h3>
          <p>
            The cardiac cycle consists of alternating periods of ventricular contraction and relaxation.
          </p>

          <ul>
            <li><strong>Ventricular systole</strong> – ventricular contraction and blood ejection.</li>
            <li><strong>Ventricular diastole</strong> – ventricular relaxation and filling.</li>
            <li><strong>Atrial systole</strong> – atrial contraction contributes to ventricular filling.</li>
          </ul>

          <h3>Cardiac Output</h3>
          <p>
            Cardiac output is the volume of blood pumped by one ventricle per minute.
          </p>

          <p>
            <strong>Cardiac Output = Heart Rate × Stroke Volume</strong>
          </p>

          <p>
            Stroke volume is the amount of blood ejected by a ventricle during one contraction.
          </p>

          <p>
            <strong>Stroke Volume = End-Diastolic Volume − End-Systolic Volume</strong>
          </p>

          <h3>Preload</h3>
          <p>
            Preload represents ventricular filling and myocardial fiber stretch at the end of
            diastole. It is influenced substantially by venous return.
          </p>

          <h3>Afterload</h3>
          <p>
            Afterload is the load against which the ventricle must eject blood. For the left ventricle,
            systemic arterial pressure and vascular resistance are important determinants.
          </p>

          <h3>Contractility</h3>
          <p>
            Contractility refers to the intrinsic ability of cardiac muscle to generate force at a
            given preload. Sympathetic stimulation and increased intracellular calcium generally increase
            contractility.
          </p>

          <h3>Electrical Conduction</h3>
          <p>
            Cardiac contraction is coordinated by specialized cardiac conduction tissue.
          </p>

          <ol>
            <li>Sinoatrial node</li>
            <li>Atrial conduction pathways</li>
            <li>Atrioventricular node</li>
            <li>Atrioventricular bundle</li>
            <li>Right and left bundle branches</li>
            <li>Purkinje fibre network</li>
          </ol>

          <h3>Heart Sounds</h3>
          <ul>
            <li><strong>S1</strong> – mainly closure of the mitral and tricuspid valves.</li>
            <li><strong>S2</strong> – mainly closure of the aortic and pulmonary valves.</li>
            <li><strong>S3</strong> – associated with rapid ventricular filling and may be physiological or pathological depending on age and clinical context.</li>
            <li><strong>S4</strong> – associated with atrial contraction against a stiff ventricle.</li>
          </ul>

          <h3>Autonomic Regulation</h3>
          <ul>
            <li><strong>Sympathetic stimulation</strong> increases heart rate, conduction velocity and contractility.</li>
            <li><strong>Parasympathetic stimulation</strong> primarily reduces heart rate and slows AV nodal conduction.</li>
          </ul>
        `,

        biochemistry: `
          <h2>Heart Biochemistry</h2>

          <p>
            The heart is one of the most metabolically active organs in the human body. Cardiac
            contraction is continuous throughout life and therefore requires a virtually uninterrupted
            supply of chemical energy. The biochemical physiology of the heart is centered on the
            generation of ATP, maintenance of electrochemical gradients, regulation of calcium ions,
            contraction of the actin-myosin apparatus, membrane integrity, redox homeostasis, and
            adaptation of substrate utilization to nutritional, hormonal, and pathological conditions.
          </p>

          <p>
            Under normal conditions, the adult myocardium derives most of its ATP from mitochondrial
            oxidative phosphorylation. Although the heart can use multiple metabolic substrates,
            fatty acids generally provide a major proportion of its oxidative energy under resting,
            well-fed conditions. Glucose, lactate, ketone bodies, and amino acids can also contribute
            substantially depending on physiological and pathological circumstances.
          </p>

          <h3>1. High Metabolic Demand of the Heart</h3>

          <p>
            Cardiac muscle has an exceptionally high and continuous requirement for ATP. Unlike skeletal
            muscle, which can temporarily reduce activity or enter periods of rest, the heart must
            contract continuously to maintain systemic and pulmonary circulation.
          </p>

          <p>
            Cardiomyocytes therefore contain a very high density of mitochondria. In ventricular
            cardiomyocytes, mitochondria occupy a substantial fraction of the cellular volume and are
            positioned close to the contractile apparatus and intracellular calcium-handling machinery.
            This organization allows ATP to be generated and delivered rapidly to sites where it is
            required.
          </p>

          <p>
            The major ATP-consuming processes in cardiomyocytes include:
          </p>

          <ul>
            <li>Actin-myosin cross-bridge cycling</li>
            <li>Sarcoplasmic reticulum calcium reuptake</li>
            <li>Plasma membrane calcium extrusion</li>
            <li>Maintenance of the sodium and potassium gradients</li>
            <li>Protein synthesis</li>
            <li>Phospholipid and membrane maintenance</li>
            <li>Cellular signaling</li>
            <li>Organelle transport</li>
            <li>Cellular repair and turnover</li>
          </ul>

          <h3>2. ATP as the Principal Energy Currency</h3>

          <p>
            Adenosine triphosphate (ATP) is the principal immediate energy currency of the myocardium.
            ATP contains high-energy phosphoanhydride bonds whose hydrolysis releases energy that can
            be coupled to cellular work.
          </p>

          <p>
            The basic reaction is:
          </p>

          <p>
            ATP + H<sub>2</sub>O → ADP + P<sub>i</sub> + energy
          </p>

          <p>
            ATP hydrolysis provides energy for mechanical contraction, active transport, and numerous
            biosynthetic reactions.
          </p>

          <p>
            Because cardiac ATP consumption is continuous, the myocardium cannot rely on a large stored
            ATP pool. Instead, ATP is continuously regenerated through oxidative phosphorylation and
            high-energy phosphate transfer systems.
          </p>

          <h3>3. Major Energy Substrates of the Heart</h3>

          <p>
            The heart is metabolically flexible. It can oxidize several substrates and can change its
            preferred fuel depending on nutritional status, exercise, hormones, oxygen availability,
            age, and disease.
          </p>

          <ul>
            <li><strong>Fatty acids</strong> — major oxidative substrate under many resting conditions</li>
            <li><strong>Glucose</strong> — important substrate, particularly during increased metabolic demand and ischemia</li>
            <li><strong>Lactate</strong> — can be an important oxidative fuel rather than merely a metabolic waste product</li>
            <li><strong>Ketone bodies</strong> — increasingly important during fasting and certain pathological states</li>
            <li><strong>Amino acids</strong> — normally contribute a smaller proportion of cardiac energy metabolism</li>
            <li><strong>Glycogen-derived glucose</strong> — provides a local carbohydrate reserve</li>
          </ul>

          <h3>4. Fatty Acid Metabolism</h3>

          <p>
            Fatty acids are an important energy substrate for the adult myocardium. They enter
            cardiomyocytes from circulating non-esterified fatty acids, lipoprotein-derived fatty acids,
            and intracellular triglyceride stores.
          </p>

          <p>
            Before oxidation, long-chain fatty acids must be activated to fatty acyl-CoA:
          </p>

          <p>
            Fatty acid + CoA + ATP → fatty acyl-CoA + AMP + PP<sub>i</sub>
          </p>

          <p>
            Long-chain fatty acyl-CoA molecules cannot directly cross the inner mitochondrial membrane.
            They therefore use the carnitine shuttle.
          </p>

          <h4>Carnitine Shuttle</h4>

          <ol>
            <li>
              <strong>CPT-I:</strong> Carnitine palmitoyltransferase I transfers the fatty acyl group
              from CoA to carnitine.
            </li>
            <li>
              <strong>CACT:</strong> Carnitine-acylcarnitine translocase transports acylcarnitine into
              the mitochondrial matrix while transporting free carnitine outward.
            </li>
            <li>
              <strong>CPT-II:</strong> Carnitine palmitoyltransferase II transfers the fatty acyl group
              back to CoA inside the mitochondrial matrix.
            </li>
          </ol>

          <p>
            The resulting fatty acyl-CoA undergoes β-oxidation.
          </p>

          <h3>5. β-Oxidation of Fatty Acids</h3>

          <p>
            β-oxidation is a mitochondrial pathway that progressively shortens fatty acyl-CoA molecules
            by two carbon atoms at a time. Each cycle produces acetyl-CoA, NADH, and FADH<sub>2</sub>.
          </p>

          <p>
            The four major reactions of a β-oxidation cycle are:
          </p>

          <ol>
            <li>Oxidation by acyl-CoA dehydrogenase</li>
            <li>Hydration by enoyl-CoA hydratase</li>
            <li>Oxidation by β-hydroxyacyl-CoA dehydrogenase</li>
            <li>Thiolytic cleavage by β-ketothiolase</li>
          </ol>

          <p>
            Acetyl-CoA generated from β-oxidation enters the citric acid cycle, while NADH and
            FADH<sub>2</sub> donate electrons to the mitochondrial electron transport chain.
          </p>

          <p>
            Fatty acid oxidation generates substantial amounts of ATP and is therefore particularly
            suited to the high energy requirements of the myocardium.
          </p>

          <h3>6. Glucose Uptake by Cardiomyocytes</h3>

          <p>
            Glucose enters cardiac muscle cells primarily through facilitated glucose transporters.
            GLUT1 contributes to basal glucose uptake, while GLUT4 is strongly regulated by insulin
            and muscle activity.
          </p>

          <p>
            Insulin promotes translocation of GLUT4-containing vesicles to the cardiomyocyte plasma
            membrane, increasing glucose uptake.
          </p>

          <p>
            Exercise and increased cardiac workload can also increase glucose uptake through
            insulin-independent signaling pathways.
          </p>

          <h3>7. Glycolysis</h3>

          <p>
            Glycolysis occurs in the cytoplasm and converts one molecule of glucose into two molecules
            of pyruvate.
          </p>

          <p>
            The overall reaction can be summarized as:
          </p>

          <p>
            Glucose + 2 ADP + 2 P<sub>i</sub> + 2 NAD<sup>+</sup>
            → 2 Pyruvate + 2 ATP + 2 NADH + 2 H<sub>2</sub>O + 2 H<sup>+</sup>
          </p>

          <p>
            Glycolysis consists of an energy-investment phase followed by an energy-generation phase.
            Important regulatory enzymes include:
          </p>

          <ul>
            <li>Hexokinase</li>
            <li>Phosphofructokinase-1 (PFK-1)</li>
            <li>Pyruvate kinase</li>
          </ul>

          <p>
            PFK-1 is a major rate-limiting regulatory enzyme of glycolysis.
          </p>

          <h3>8. Pyruvate Metabolism</h3>

          <p>
            Under aerobic conditions, pyruvate is transported into mitochondria and converted to
            acetyl-CoA by the pyruvate dehydrogenase complex.
          </p>

          <p>
            Pyruvate + CoA + NAD<sup>+</sup>
            → Acetyl-CoA + CO<sub>2</sub> + NADH + H<sup>+</sup>
          </p>

          <p>
            The pyruvate dehydrogenase complex consists of three major enzymatic components:
          </p>

          <ul>
            <li>E1 — pyruvate dehydrogenase</li>
            <li>E2 — dihydrolipoyl transacetylase</li>
            <li>E3 — dihydrolipoyl dehydrogenase</li>
          </ul>

          <p>
            Important cofactors include thiamine pyrophosphate, lipoamide, CoA, FAD, and NAD<sup>+</sup>.
          </p>

          <h3>9. Lactate Metabolism</h3>

          <p>
            Lactate is not simply a waste product of anaerobic metabolism. The myocardium can oxidize
            circulating lactate as an important energy substrate, particularly during exercise and
            increased metabolic demand.
          </p>

          <p>
            Lactate is converted to pyruvate by lactate dehydrogenase:
          </p>

          <p>
            Lactate + NAD<sup>+</sup> ⇌ Pyruvate + NADH + H<sup>+</sup>
          </p>

          <p>
            Pyruvate can subsequently enter mitochondria and undergo oxidative metabolism.
          </p>

          <h3>10. Citric Acid Cycle</h3>

          <p>
            Acetyl-CoA derived from fatty acids, glucose, and other substrates enters the mitochondrial
            citric acid cycle, also known as the Krebs cycle or tricarboxylic acid (TCA) cycle.
          </p>

          <p>
            The cycle oxidizes acetyl-CoA and generates reduced electron carriers that provide electrons
            to the respiratory chain.
          </p>

          <p>
            Major intermediates include:
          </p>

          <ul>
            <li>Citrate</li>
            <li>Isocitrate</li>
            <li>α-Ketoglutarate</li>
            <li>Succinyl-CoA</li>
            <li>Succinate</li>
            <li>Fumarate</li>
            <li>Malate</li>
            <li>Oxaloacetate</li>
          </ul>

          <p>
            One turn of the cycle generates NADH, FADH<sub>2</sub>, GTP, and CO<sub>2</sub>.
            NADH and FADH<sub>2</sub> subsequently provide electrons to oxidative phosphorylation.
          </p>

          <h3>11. Mitochondrial Electron Transport Chain</h3>

          <p>
            The mitochondrial electron transport chain is located in the inner mitochondrial membrane.
            It transfers electrons from NADH and FADH<sub>2</sub> through a series of protein complexes.
          </p>

          <ul>
            <li><strong>Complex I:</strong> NADH dehydrogenase</li>
            <li><strong>Complex II:</strong> Succinate dehydrogenase</li>
            <li><strong>Complex III:</strong> Cytochrome bc<sub>1</sub> complex</li>
            <li><strong>Complex IV:</strong> Cytochrome c oxidase</li>
          </ul>

          <p>
            Electrons ultimately reduce molecular oxygen to water.
          </p>

          <p>
            Oxygen is therefore the terminal electron acceptor of aerobic mitochondrial respiration.
          </p>

          <h3>12. Oxidative Phosphorylation</h3>

          <p>
            Electron transport through the respiratory chain creates a proton electrochemical gradient
            across the inner mitochondrial membrane. Protons are pumped from the mitochondrial matrix
            into the intermembrane space.
          </p>

          <p>
            The resulting proton-motive force drives protons back into the mitochondrial matrix through
            ATP synthase.
          </p>

          <p>
            ATP synthase uses this electrochemical energy to phosphorylate ADP:
          </p>

          <p>
            ADP + P<sub>i</sub> → ATP
          </p>

          <p>
            This process is called oxidative phosphorylation and is responsible for the majority of
            ATP production in the normally oxygenated myocardium.
          </p>

          <h3>13. ATP Production and the ATP/ADP Ratio</h3>

          <p>
            Cellular energy status is closely related to the concentrations of ATP, ADP, AMP, and
            phosphocreatine.
          </p>

          <p>
            A reduction in ATP and an increase in AMP indicate cellular energy stress. AMP can activate
            AMP-activated protein kinase (AMPK), an important metabolic sensor that promotes pathways
            capable of restoring cellular energy.
          </p>

          <p>
            AMPK can increase glucose uptake and stimulate fatty acid oxidation while suppressing
            energy-consuming anabolic pathways.
          </p>

          <h3>14. Phosphocreatine Energy Buffer</h3>

          <p>
            The creatine-phosphocreatine system acts as a rapidly available intracellular energy buffer.
            Creatine kinase catalyzes the reversible transfer of a high-energy phosphate group:
          </p>

          <p>
            Phosphocreatine + ADP + H<sup>+</sup> ⇌ Creatine + ATP
          </p>

          <p>
            This reaction allows phosphocreatine to rapidly regenerate ATP when ATP consumption
            increases, particularly near the contractile apparatus.
          </p>

          <p>
            The phosphocreatine-to-creatine ratio can therefore provide information about myocardial
            energetic status.
          </p>

          <h3>15. ATP Utilization During Cardiac Contraction</h3>

          <p>
            A major fraction of cardiac ATP is consumed by the actin-myosin contractile machinery.
            Myosin ATPase hydrolyzes ATP during the cross-bridge cycle.
          </p>

          <p>
            ATP binding to myosin causes detachment of myosin from actin. ATP hydrolysis then
            repositions the myosin head into a high-energy state, allowing subsequent interaction
            with actin.
          </p>

          <p>
            ATP is therefore essential for both contraction and relaxation.
          </p>

          <h3>16. ATP and Cardiac Relaxation</h3>

          <p>
            Cardiac relaxation is an active, energy-dependent process. Cytosolic calcium must be
            removed after contraction.
          </p>

          <p>
            The sarcoplasmic/endoplasmic reticulum Ca<sup>2+</sup>-ATPase (SERCA2a) uses ATP to pump
            calcium from the cytoplasm back into the sarcoplasmic reticulum.
          </p>

          <p>
            Calcium is also extruded from the cardiomyocyte through the sodium-calcium exchanger
            (NCX) and plasma membrane calcium ATPase.
          </p>

          <p>
            Consequently, inadequate ATP production can impair both contraction and relaxation.
          </p>

          <h3>17. Calcium Biochemistry</h3>

          <p>
            Calcium ions are central to excitation-contraction coupling in cardiomyocytes.
            The concentration of free cytosolic Ca<sup>2+</sup> is maintained at a very low level
            during diastole and rises rapidly during systole.
          </p>

          <p>
            Depolarization of the cardiomyocyte membrane opens L-type voltage-gated calcium channels.
            Calcium enters the cell and activates ryanodine receptors on the sarcoplasmic reticulum.
          </p>

          <p>
            This produces calcium-induced calcium release.
          </p>

          <h3>18. Calcium-Induced Calcium Release</h3>

          <p>
            The sequence can be summarized as:
          </p>

          <ol>
            <li>Action potential depolarizes the cardiomyocyte membrane.</li>
            <li>L-type calcium channels open.</li>
            <li>Extracellular Ca<sup>2+</sup> enters the cell.</li>
            <li>Incoming Ca<sup>2+</sup> activates ryanodine receptor type 2 (RyR2).</li>
            <li>Ca<sup>2+</sup> is released from the sarcoplasmic reticulum.</li>
            <li>Cytosolic Ca<sup>2+</sup> binds to troponin C.</li>
            <li>Tropomyosin moves away from actin's myosin-binding sites.</li>
            <li>Actin-myosin cross-bridge cycling occurs.</li>
          </ol>

          <h3>19. Calcium Removal During Relaxation</h3>

          <p>
            Following contraction, cytosolic calcium concentration must decrease.
            Approximately most of the calcium is returned to the sarcoplasmic reticulum through
            SERCA2a, while the remainder is primarily extruded through the sodium-calcium exchanger.
          </p>

          <p>
            SERCA2a activity is regulated by phospholamban. Phosphorylation of phospholamban reduces
            its inhibitory effect on SERCA2a, thereby increasing calcium reuptake.
          </p>

          <h3>20. Sodium and Potassium Biochemistry</h3>

          <p>
            The resting membrane potential and electrical excitability of cardiomyocytes depend on
            carefully maintained sodium and potassium gradients.
          </p>

          <p>
            The sodium-potassium ATPase uses ATP to transport:
          </p>

          <ul>
            <li>3 Na<sup>+</sup> out of the cell</li>
            <li>2 K<sup>+</sup> into the cell</li>
          </ul>

          <p>
            This pump is essential for maintaining ionic gradients that support membrane excitability
            and secondary transport processes.
          </p>

          <h3>21. Sodium-Calcium Exchange</h3>

          <p>
            The sodium-calcium exchanger is an important mechanism for calcium extrusion.
            Under typical conditions, the exchanger uses the inward sodium electrochemical gradient
            to drive calcium out of the cell.
          </p>

          <p>
            A common transport stoichiometry is approximately:
          </p>

          <p>
            3 Na<sup>+</sup> inward ↔ 1 Ca<sup>2+</sup> outward
          </p>

          <p>
            Because NCX depends on the sodium gradient, changes in intracellular sodium can influence
            intracellular calcium concentration and therefore cardiac contractility.
          </p>

          <h3>22. Metabolic Flexibility</h3>

          <p>
            The heart is metabolically flexible and changes substrate utilization according to
            physiological conditions.
          </p>

          <h4>Fed State</h4>

          <p>
            Following carbohydrate consumption, insulin increases glucose uptake and promotes glucose
            oxidation and glycogen synthesis.
          </p>

          <h4>Fasting State</h4>

          <p>
            During fasting, circulating fatty acids and ketone bodies increase. The myocardium can
            increase oxidation of these substrates and reduce its dependence on glucose.
          </p>

          <h4>Exercise</h4>

          <p>
            During exercise, increased cardiac workload increases ATP demand. The heart increases
            substrate uptake and oxidative metabolism to match energy expenditure.
          </p>

          <h3>23. Ketone Body Metabolism</h3>

          <p>
            Ketone bodies include:
          </p>

          <ul>
            <li>β-Hydroxybutyrate</li>
            <li>Acetoacetate</li>
            <li>Acetone</li>
          </ul>

          <p>
            β-Hydroxybutyrate and acetoacetate can be oxidized by the myocardium to acetyl-CoA.
            Acetyl-CoA then enters the citric acid cycle.
          </p>

          <p>
            Ketone bodies become particularly relevant during prolonged fasting, carbohydrate
            restriction, and certain metabolic disorders.
          </p>

          <h3>24. Glycogen in the Heart</h3>

          <p>
            Cardiomyocytes store glucose as glycogen. Cardiac glycogen provides a local source of
            glucose that can be mobilized during increased energy demand or reduced oxygen availability.
          </p>

          <p>
            Glycogen is broken down through glycogenolysis to generate glucose-1-phosphate, which can
            subsequently enter glycolytic metabolism.
          </p>

          <h3>25. Anaerobic Glycolysis and Ischemia</h3>

          <p>
            When oxygen delivery becomes inadequate, mitochondrial oxidative phosphorylation decreases.
            The myocardium increases reliance on glycolysis for ATP production.
          </p>

          <p>
            Pyruvate is increasingly converted to lactate, allowing NAD<sup>+</sup> to be regenerated
            so that glycolysis can continue.
          </p>

          <p>
            However, anaerobic glycolysis generates far less ATP per molecule of glucose than complete
            aerobic oxidation.
          </p>

          <p>
            Ischemia therefore rapidly produces an energetic imbalance characterized by reduced ATP,
            increased ADP and AMP, accumulation of inorganic phosphate, increased lactate production,
            and intracellular acidosis.
          </p>

          <h3>26. Metabolic Consequences of Myocardial Ischemia</h3>

          <p>
            Reduced coronary blood flow causes several biochemical abnormalities:
          </p>

          <ul>
            <li>Reduced oxygen availability</li>
            <li>Reduced oxidative phosphorylation</li>
            <li>Reduced ATP production</li>
            <li>Increased anaerobic glycolysis</li>
            <li>Increased lactate generation</li>
            <li>Intracellular proton accumulation</li>
            <li>Reduced phosphocreatine</li>
            <li>Disruption of ion gradients</li>
            <li>Intracellular sodium accumulation</li>
            <li>Calcium overload</li>
            <li>Increased oxidative stress, particularly during reperfusion</li>
          </ul>

          <h3>27. Reactive Oxygen Species</h3>

          <p>
            Mitochondrial oxidative metabolism inevitably produces reactive oxygen species (ROS).
            Important reactive species include superoxide, hydrogen peroxide, and hydroxyl radicals.
          </p>

          <p>
            Excessive ROS can damage:
          </p>

          <ul>
            <li>Lipids</li>
            <li>Proteins</li>
            <li>DNA</li>
            <li>Mitochondrial membranes</li>
            <li>Cellular enzymes</li>
          </ul>

          <p>
            The myocardium possesses antioxidant systems that limit oxidative damage.
          </p>

          <h3>28. Major Antioxidant Systems</h3>

          <ul>
            <li>
              <strong>Superoxide dismutase:</strong> Converts superoxide into hydrogen peroxide.
            </li>
            <li>
              <strong>Catalase:</strong> Converts hydrogen peroxide into water and oxygen.
            </li>
            <li>
              <strong>Glutathione peroxidase:</strong> Reduces hydrogen peroxide and lipid peroxides.
            </li>
            <li>
              <strong>Glutathione:</strong> Acts as an important intracellular reducing agent.
            </li>
          </ul>

          <h3>29. Reperfusion Injury</h3>

          <p>
            Restoration of blood flow after prolonged ischemia is essential for tissue survival but can
            paradoxically generate additional cellular injury.
          </p>

          <p>
            Reperfusion can produce a rapid increase in mitochondrial reactive oxygen species,
            disturbances in intracellular calcium, mitochondrial permeability changes, and activation
            of cell death pathways.
          </p>

          <h3>30. Nitric Oxide and Cardiac Biochemistry</h3>

          <p>
            Nitric oxide (NO) is an important signaling molecule in the cardiovascular system.
            It is synthesized from L-arginine by nitric oxide synthase enzymes.
          </p>

          <p>
            NO activates soluble guanylyl cyclase in vascular smooth muscle, increasing cyclic GMP
            and promoting vasodilation.
          </p>

          <p>
            Endothelial nitric oxide also influences coronary vascular tone and therefore myocardial
            oxygen and nutrient delivery.
          </p>

          <h3>31. Cyclic AMP Signaling</h3>

          <p>
            β<sub>1</sub>-adrenergic stimulation activates G<sub>s</sub> proteins, which stimulate
            adenylyl cyclase and increase intracellular cyclic AMP (cAMP).
          </p>

          <p>
            Increased cAMP activates protein kinase A (PKA), which phosphorylates several proteins
            involved in cardiac excitation-contraction coupling.
          </p>

          <p>
            Important targets include:
          </p>

          <ul>
            <li>L-type calcium channels</li>
            <li>Phospholamban</li>
            <li>Troponin I</li>
            <li>Other proteins involved in calcium cycling</li>
          </ul>

          <p>
            The overall effect is increased calcium availability, increased contractility, and
            enhanced relaxation.
          </p>

          <h3>32. Adrenergic Regulation of Cardiac Metabolism</h3>

          <p>
            Catecholamines such as epinephrine and norepinephrine increase cardiac workload and
            therefore increase ATP demand.
          </p>

          <p>
            β-adrenergic stimulation promotes:
          </p>

          <ul>
            <li>Increased heart rate</li>
            <li>Increased contractility</li>
            <li>Increased calcium cycling</li>
            <li>Increased myocardial oxygen consumption</li>
            <li>Increased substrate utilization</li>
            <li>Increased fatty acid mobilization</li>
          </ul>

          <h3>33. Insulin and Cardiac Metabolism</h3>

          <p>
            Insulin promotes glucose uptake through GLUT4 and influences the balance between glucose
            oxidation, glycogen synthesis, and lipid metabolism.
          </p>

          <p>
            Insulin signaling involves receptor tyrosine kinase activation followed by intracellular
            signaling pathways including PI3K-Akt.
          </p>

          <h3>34. AMPK and Cardiac Energy Sensing</h3>

          <p>
            AMP-activated protein kinase (AMPK) functions as an intracellular energy sensor.
            It becomes activated when cellular energy availability decreases and AMP or ADP rises
            relative to ATP.
          </p>

          <p>
            AMPK promotes ATP-generating processes such as:
          </p>

          <ul>
            <li>Glucose uptake</li>
            <li>Glycolysis</li>
            <li>Fatty acid oxidation</li>
          </ul>

          <p>
            At the same time, it suppresses energy-consuming anabolic pathways.
          </p>

          <h3>35. Malate-Aspartate Shuttle</h3>

          <p>
            Cytosolic NADH generated during glycolysis cannot directly cross the inner mitochondrial
            membrane. The reducing equivalents are transferred into mitochondria through shuttle
            systems.
          </p>

          <p>
            The malate-aspartate shuttle is particularly important in oxidative tissues such as
            cardiac muscle.
          </p>

          <p>
            This shuttle transfers reducing equivalents from cytosolic NADH into the mitochondrial
            matrix, where they can contribute to oxidative phosphorylation.
          </p>

          <h3>36. Pentose Phosphate Pathway</h3>

          <p>
            The pentose phosphate pathway provides NADPH and ribose-5-phosphate.
            NADPH contributes to antioxidant defense by supporting the regeneration of reduced
            glutathione.
          </p>

          <p>
            Although the pentose phosphate pathway does not represent the principal source of ATP
            in the myocardium, it contributes to cellular redox homeostasis and biosynthetic processes.
          </p>

          <h3>37. Lipid Metabolism and Membrane Integrity</h3>

          <p>
            Cardiac cell membranes contain phospholipids, cholesterol, glycolipids, and other lipids.
            These molecules are essential for maintaining membrane structure, receptor function,
            ion-channel activity, and intracellular signaling.
          </p>

          <p>
            Excessive lipid accumulation within cardiomyocytes can produce lipotoxicity.
            Accumulation of lipid intermediates such as ceramides and diacylglycerol may interfere
            with cellular signaling and mitochondrial function.
          </p>

          <h3>38. Mitochondrial Biogenesis</h3>

          <p>
            Mitochondrial quantity and function are critical to cardiac performance.
            Mitochondrial biogenesis involves coordinated expression of nuclear and mitochondrial
            genes encoding components of the respiratory machinery.
          </p>

          <p>
            Transcriptional regulators such as PGC-1α play important roles in mitochondrial
            biogenesis and oxidative metabolism.
          </p>

          <h3>39. Protein Metabolism in the Heart</h3>

          <p>
            Cardiomyocytes continuously synthesize and degrade proteins.
            Protein turnover is required for maintenance of contractile proteins, ion channels,
            receptors, enzymes, and structural proteins.
          </p>

          <p>
            Amino acids can also contribute to energy metabolism. Carbon skeletons from amino acids
            can enter pathways such as the citric acid cycle.
          </p>

          <h3>40. Branched-Chain Amino Acid Metabolism</h3>

          <p>
            Branched-chain amino acids include leucine, isoleucine, and valine.
            Their metabolism can contribute to myocardial energy production and signaling.
          </p>

          <p>
            Abnormal regulation of branched-chain amino acid metabolism has been associated with
            metabolic remodeling and cardiovascular disease.
          </p>

          <h3>41. Acid-Base Biochemistry of the Myocardium</h3>

          <p>
            Cardiac metabolism produces carbon dioxide, protons, and other metabolic products.
            Maintaining intracellular pH is therefore essential.
          </p>

          <p>
            Carbon dioxide produced during oxidative metabolism reacts with water to form carbonic
            acid, which can dissociate into bicarbonate and hydrogen ions.
          </p>

          <p>
            During ischemia, increased anaerobic glycolysis and ATP hydrolysis contribute to
            intracellular acidosis.
          </p>

          <h3>42. Carbon Dioxide Production</h3>

          <p>
            Carbon dioxide is produced primarily during oxidative decarboxylation reactions,
            especially pyruvate dehydrogenase and the citric acid cycle.
          </p>

          <p>
            The produced CO<sub>2</sub> diffuses from cardiomyocytes into the blood and is ultimately
            transported to the lungs for elimination.
          </p>

          <h3>43. Metabolic Remodeling in Heart Failure</h3>

          <p>
            Heart failure is associated with profound metabolic remodeling.
            The failing myocardium may show altered mitochondrial function, reduced oxidative
            capacity, impaired fatty acid oxidation, increased reliance on glucose metabolism,
            and abnormalities in ATP production.
          </p>

          <p>
            The exact metabolic phenotype varies with disease stage, cause, workload, systemic
            metabolism, and neurohormonal status.
          </p>

          <h3>44. Cardiac Metabolism in Diabetes Mellitus</h3>

          <p>
            In diabetes mellitus, altered insulin signaling and increased circulating fatty acids
            can shift myocardial metabolism toward increased fatty acid utilization.
          </p>

          <p>
            Excessive fatty acid oxidation can reduce metabolic flexibility and may contribute to
            mitochondrial dysfunction, oxidative stress, lipid accumulation, and impaired cardiac
            function.
          </p>

          <h3>45. Metabolic Adaptation to Exercise</h3>

          <p>
            Exercise increases cardiac workload, ATP consumption, oxygen consumption, and substrate
            oxidation.
          </p>

          <p>
            The myocardium responds by increasing coronary blood flow and increasing oxidation of
            available substrates.
          </p>

          <p>
            Regular exercise can also promote favorable mitochondrial adaptations and improve
            metabolic efficiency.
          </p>

          <h3>46. Cardiac Biomarkers</h3>

          <p>
            Damage to cardiomyocytes causes intracellular proteins and enzymes to enter the circulation.
            These molecules can therefore serve as biomarkers of myocardial injury.
          </p>

          <h4>Cardiac Troponin I</h4>

          <p>
            Cardiac troponin I (cTnI) is a component of the cardiac contractile regulatory apparatus.
            It is highly specific for myocardial injury when interpreted in the appropriate clinical
            context.
          </p>

          <h4>Cardiac Troponin T</h4>

          <p>
            Cardiac troponin T (cTnT) is another component of the cardiac troponin complex and is
            widely used as a biomarker of myocardial injury.
          </p>

          <p>
            High-sensitivity cardiac troponin assays can detect very small concentrations of circulating
            troponin and are central to the biochemical assessment of suspected acute myocardial
            infarction.
          </p>

          <h4>CK-MB</h4>

          <p>
            Creatine kinase-MB (CK-MB) is an isoenzyme of creatine kinase associated with cardiac
            muscle but is not completely specific to the myocardium.
          </p>

          <p>
            CK-MB has historically been used in the evaluation of myocardial infarction and can remain
            clinically useful in selected situations, including assessment of possible reinfarction
            because of its relatively faster decline compared with cardiac troponins.
          </p>

          <h3>47. Creatine Kinase System</h3>

          <p>
            Creatine kinase catalyzes reversible phosphate transfer between ATP and creatine.
            The reaction provides a rapidly accessible energy buffer within cardiac muscle.
          </p>

          <p>
            The major creatine kinase isoenzymes include:
          </p>

          <ul>
            <li>CK-MM</li>
            <li>CK-MB</li>
            <li>CK-BB</li>
          </ul>

          <p>
            Mitochondrial creatine kinase is also important in transferring high-energy phosphate
            equivalents between mitochondria and cytosolic sites of ATP utilization.
          </p>

          <h3>48. Troponin Complex and Calcium Regulation</h3>

          <p>
            The cardiac troponin complex consists of troponin C, troponin I, and troponin T.
          </p>

          <ul>
            <li><strong>Troponin C:</strong> Binds calcium.</li>
            <li><strong>Troponin I:</strong> Participates in inhibition of actin-myosin interaction during relaxation.</li>
            <li><strong>Troponin T:</strong> Anchors the troponin complex to tropomyosin.</li>
          </ul>

          <p>
            Binding of Ca<sup>2+</sup> to troponin C produces conformational changes that facilitate
            interaction between actin and myosin.
          </p>

          <h3>49. Biomarkers of Cardiac Stress and Heart Failure</h3>

          <p>
            In addition to markers of myocardial injury, biochemical markers can reflect cardiac
            wall stress and heart failure.
          </p>

          <ul>
            <li>BNP — B-type natriuretic peptide</li>
            <li>NT-proBNP — N-terminal pro-B-type natriuretic peptide</li>
          </ul>

          <p>
            Increased ventricular wall stress stimulates release of natriuretic peptides.
            These biomarkers are useful in the evaluation and management of heart failure when
            interpreted alongside clinical findings.
          </p>

          <h3>50. Natriuretic Peptide Biochemistry</h3>

          <p>
            BNP is synthesized as a precursor peptide and processed into biologically active BNP
            and the inactive N-terminal fragment NT-proBNP.
          </p>

          <p>
            BNP promotes natriuresis, diuresis, and vasodilation and counteracts several
            neurohormonal mechanisms that increase cardiac workload.
          </p>

          <h3>51. Biochemical Effects of Myocardial Infarction</h3>

          <p>
            During myocardial infarction, prolonged interruption of coronary blood flow causes
            severe metabolic and structural injury.
          </p>

          <p>
            The biochemical sequence may include:
          </p>

          <ol>
            <li>Reduced oxygen delivery</li>
            <li>Reduced mitochondrial oxidative phosphorylation</li>
            <li>ATP depletion</li>
            <li>Increased anaerobic glycolysis</li>
            <li>Lactate accumulation</li>
            <li>Intracellular acidosis</li>
            <li>Failure of ATP-dependent ion pumps</li>
            <li>Intracellular sodium and calcium accumulation</li>
            <li>Mitochondrial dysfunction</li>
            <li>Membrane injury</li>
            <li>Cell death</li>
            <li>Release of intracellular proteins such as cardiac troponins</li>
          </ol>

          <h3>52. Calcium Overload in Ischemic Injury</h3>

          <p>
            ATP depletion impairs calcium handling. Reduced SERCA activity, altered sodium-calcium
            exchange, membrane depolarization, and intracellular sodium accumulation can contribute
            to cytosolic calcium overload.
          </p>

          <p>
            Excess intracellular calcium can activate proteases, phospholipases, endonucleases,
            and other destructive pathways and can impair mitochondrial function.
          </p>

          <h3>53. Mitochondrial Permeability Transition</h3>

          <p>
            Severe calcium overload and oxidative stress can promote opening of the mitochondrial
            permeability transition pore.
          </p>

          <p>
            This disrupts mitochondrial membrane potential, compromises ATP synthesis, promotes
            mitochondrial swelling, and can contribute to cardiomyocyte death.
          </p>

          <h3>54. Apoptosis and Necrosis</h3>

          <p>
            Cardiomyocyte death may occur through different mechanisms.
            Necrosis is associated with severe cellular injury and loss of membrane integrity,
            resulting in release of intracellular components into the circulation.
          </p>

          <p>
            Apoptosis is a regulated form of cell death involving intracellular signaling pathways,
            caspase activation, and controlled cellular dismantling.
          </p>

          <h3>55. Autophagy and Cardiac Homeostasis</h3>

          <p>
            Autophagy is a cellular quality-control process that removes damaged proteins and
            organelles through lysosomal degradation.
          </p>

          <p>
            Normal autophagy contributes to cardiomyocyte homeostasis, particularly because
            cardiomyocytes are long-lived cells with substantial metabolic activity.
          </p>

          <p>
            Both insufficient and excessive dysregulation of autophagy can contribute to cardiac
            pathology depending on the disease context.
          </p>

          <h3>56. Biochemistry of Cardiac Hypertrophy</h3>

          <p>
            Cardiac hypertrophy involves changes in gene expression, protein synthesis, energy
            metabolism, calcium handling, and cellular signaling.
          </p>

          <p>
            Hypertrophied cardiomyocytes may undergo metabolic remodeling characterized by altered
            substrate utilization and mitochondrial function.
          </p>

          <p>
            Major signaling pathways involved in pathological hypertrophy include calcium-dependent
            signaling, calcineurin-NFAT signaling, MAP kinase pathways, and neurohormonal signaling.
          </p>

          <h3>57. Relationship Between Oxygen Consumption and Cardiac Work</h3>

          <p>
            Cardiac oxygen consumption is closely related to myocardial work.
            Increased heart rate, contractility, and wall stress generally increase ATP demand and
            therefore increase mitochondrial oxygen consumption.
          </p>

          <p>
            Coronary circulation must continuously match oxygen delivery to myocardial metabolic demand.
          </p>

          <h3>58. Oxygen Extraction by the Myocardium</h3>

          <p>
            The myocardium extracts a relatively high proportion of available oxygen from coronary
            arterial blood at rest. Consequently, increases in myocardial oxygen demand are met
            primarily by increasing coronary blood flow rather than by greatly increasing oxygen
            extraction.
          </p>

          <h3>59. Integration of Cardiac Energy Metabolism</h3>

          <p>
            Cardiac metabolism is highly integrated. Fatty acids, glucose, lactate, and ketone bodies
            converge on mitochondrial oxidative pathways.
          </p>

          <p>
            Fatty acids generate acetyl-CoA through β-oxidation. Glucose generates pyruvate through
            glycolysis and acetyl-CoA through pyruvate dehydrogenase. Lactate can be converted to
            pyruvate, while ketone bodies can be converted to acetyl-CoA.
          </p>

          <p>
            Acetyl-CoA enters the citric acid cycle, producing NADH and FADH<sub>2</sub>.
            These reduced electron carriers drive the electron transport chain, generating the
            proton gradient used by ATP synthase to produce ATP.
          </p>

          <h3>60. Overall Biochemical Energy Pathway</h3>

          <p>
            The major aerobic energy pathway of the myocardium can therefore be represented as:
          </p>

          <p>
            <strong>
              Nutrient substrate → Acetyl-CoA → Citric acid cycle → NADH/FADH<sub>2</sub>
              → Electron transport chain → Proton gradient → ATP synthase → ATP
              → Cardiac contraction and cellular work
            </strong>
          </p>

          <h3>61. Key Biochemical Principles of the Heart</h3>

          <ul>
            <li>The myocardium has an exceptionally high and continuous ATP requirement.</li>
            <li>Mitochondrial oxidative phosphorylation supplies most cardiac ATP under normal aerobic conditions.</li>
            <li>Fatty acids are a major oxidative fuel for the adult heart.</li>
            <li>Glucose, lactate, and ketone bodies are important alternative or complementary substrates.</li>
            <li>The heart can switch between metabolic substrates according to physiological conditions.</li>
            <li>ATP powers actin-myosin cycling and active calcium and ion transport.</li>
            <li>The phosphocreatine-creatine kinase system provides a rapid ATP-buffering mechanism.</li>
            <li>Calcium is the principal intracellular signal coupling electrical excitation to contraction.</li>
            <li>SERCA2a is an ATP-dependent mechanism responsible for major calcium reuptake into the sarcoplasmic reticulum.</li>
            <li>AMPK functions as an important cellular energy sensor.</li>
            <li>Mitochondria are central to cardiac energy production and redox regulation.</li>
            <li>Reactive oxygen species are continuously generated and must be controlled by antioxidant systems.</li>
            <li>Ischemia causes ATP depletion, increased anaerobic glycolysis, lactate accumulation, acidosis, and ionic disturbances.</li>
            <li>Reperfusion can produce additional oxidative and calcium-mediated injury.</li>
            <li>Cardiac troponins are major biomarkers of myocardial injury.</li>
            <li>CK-MB can provide additional information in selected clinical situations.</li>
            <li>BNP and NT-proBNP reflect cardiac wall stress and are important biomarkers in heart failure.</li>
          </ul>

          <h3>62. Clinical Biochemistry Summary</h3>

          <p>
            The biochemical health of the heart depends on maintaining a continuous balance between
            ATP production and ATP utilization. Adequate coronary oxygen delivery permits mitochondrial
            oxidative phosphorylation to meet the large energy requirements of cardiac contraction.
            Fatty acids, glucose, lactate, and ketone bodies provide metabolic flexibility, while the
            phosphocreatine system buffers rapid fluctuations in ATP demand.
          </p>

          <p>
            Calcium metabolism links electrical activity to mechanical contraction. ATP-dependent
            calcium pumps and ion transporters then restore the intracellular ionic environment during
            relaxation. Disturbances in ATP production, mitochondrial function, calcium homeostasis,
            oxidative balance, or substrate metabolism can therefore compromise myocardial function.
          </p>

          <p>
            In myocardial ischemia, reduced oxygen delivery disrupts oxidative phosphorylation,
            increases dependence on glycolysis, causes lactate and proton accumulation, depletes ATP,
            and eventually leads to ion-pump failure, calcium overload, mitochondrial injury, and
            cardiomyocyte death. Release of intracellular cardiac proteins, particularly cardiac
            troponins, provides an important biochemical signal of myocardial injury.
          </p>

          <p>
            Overall, cardiac biochemistry is the integrated study of substrate metabolism,
            mitochondrial energy production, ATP utilization, calcium cycling, electrolyte
            homeostasis, redox regulation, intracellular signaling, cellular stress responses,
            and biochemical markers of myocardial injury. These processes operate continuously
            and are tightly coupled to the mechanical and electrical functions of the heart.
          </p>
        `,

        pathology: `
          <h2>Heart Pathology</h2>

          <p>
            Cardiac pathology is the study of structural, cellular, vascular, inflammatory, infectious,
            degenerative, metabolic, electrical, and neoplastic abnormalities affecting the heart and
            its associated structures. Disease may involve the myocardium, endocardium, valves,
            pericardium, coronary arteries, conduction system, or great vessels.
          </p>

          <p>
            Cardiac disease can impair one or more fundamental functions of the cardiovascular system:
            generation of electrical impulses, propagation of electrical activity, myocardial contraction,
            ventricular filling, maintenance of cardiac output, unidirectional blood flow, or adequate
            coronary perfusion.
          </p>

          <h3>1. Major Categories of Cardiac Pathology</h3>

          <ul>
            <li>Coronary artery disease</li>
            <li>Myocardial ischemia</li>
            <li>Myocardial infarction</li>
            <li>Heart failure</li>
            <li>Cardiac arrhythmias</li>
            <li>Conduction system disorders</li>
            <li>Valvular heart disease</li>
            <li>Cardiomyopathies</li>
            <li>Myocarditis</li>
            <li>Endocarditis</li>
            <li>Pericarditis</li>
            <li>Pericardial effusion</li>
            <li>Cardiac tamponade</li>
            <li>Congenital heart disease</li>
            <li>Pulmonary heart disease</li>
            <li>Hypertensive heart disease</li>
            <li>Rheumatic heart disease</li>
            <li>Infiltrative and storage diseases</li>
            <li>Cardiac tumors</li>
            <li>Traumatic cardiac disease</li>
          </ul>

          <h3>2. Coronary Artery Disease</h3>

          <p>
            Coronary artery disease (CAD), also called ischemic heart disease in many clinical contexts,
            results from inadequate coronary blood flow relative to myocardial oxygen and metabolic
            requirements. Atherosclerotic narrowing of the epicardial coronary arteries is the most
            common underlying cause.
          </p>

          <h4>Major Risk Factors</h4>

          <ul>
            <li>Hypertension</li>
            <li>Diabetes mellitus</li>
            <li>Dyslipidemia</li>
            <li>Smoking</li>
            <li>Obesity</li>
            <li>Physical inactivity</li>
            <li>Increasing age</li>
            <li>Family history of premature cardiovascular disease</li>
            <li>Chronic kidney disease</li>
            <li>Metabolic syndrome</li>
            <li>Chronic inflammatory states</li>
          </ul>

          <h4>Atherosclerosis</h4>

          <p>
            Atherosclerosis is characterized by accumulation of lipids, inflammatory cells,
            extracellular matrix, and fibrous tissue within the arterial intima.
          </p>

          <p>
            The basic pathological sequence includes endothelial dysfunction, entry and modification
            of lipoproteins within the arterial wall, recruitment of inflammatory cells, macrophage
            activation, foam-cell formation, smooth-muscle migration and proliferation, extracellular
            matrix deposition, and development of an atherosclerotic plaque.
          </p>

          <h4>Atherosclerotic Plaque Components</h4>

          <ul>
            <li>Lipid-rich necrotic core</li>
            <li>Cholesterol and cholesterol crystals</li>
            <li>Macrophages and other inflammatory cells</li>
            <li>Fibrous tissue</li>
            <li>Vascular smooth muscle cells</li>
            <li>Collagen and extracellular matrix</li>
            <li>Calcification in advanced lesions</li>
          </ul>

          <h4>Stable and Vulnerable Plaques</h4>

          <p>
            Stable plaques generally have a relatively thick fibrous cap and a smaller lipid core.
            They tend to produce progressive luminal narrowing and chronic myocardial ischemia.
          </p>

          <p>
            Vulnerable plaques often have a large lipid-rich necrotic core, a thin fibrous cap,
            substantial inflammatory activity, and increased susceptibility to rupture or erosion.
            Plaque disruption can expose thrombogenic material and initiate acute coronary thrombosis.
          </p>

          <h3>3. Coronary Artery Stenosis</h3>

          <p>
            Progressive atherosclerotic narrowing reduces coronary blood flow, particularly when
            myocardial oxygen demand increases.
          </p>

          <p>
            Significant coronary stenosis can produce exertional myocardial ischemia because the
            coronary circulation cannot sufficiently increase blood flow during increased cardiac
            workload.
          </p>

          <h3>4. Myocardial Ischemia</h3>

          <p>
            Myocardial ischemia occurs when myocardial oxygen supply is insufficient for metabolic
            demand.
          </p>

          <p>
            Causes include:
          </p>

          <ul>
            <li>Coronary atherosclerosis</li>
            <li>Acute coronary thrombosis</li>
            <li>Coronary artery spasm</li>
            <li>Coronary embolism</li>
            <li>Severe anemia</li>
            <li>Severe hypoxemia</li>
            <li>Marked tachycardia</li>
            <li>Severe hypotension</li>
            <li>Severe hypertension with increased myocardial workload</li>
          </ul>

          <p>
            Ischemia initially causes reversible metabolic and functional abnormalities. Prolonged
            severe ischemia can progress to irreversible cardiomyocyte injury and necrosis.
          </p>

          <h3>5. Angina Pectoris</h3>

          <p>
            Angina pectoris is chest discomfort caused by myocardial ischemia without sufficient
            myocardial necrosis to constitute myocardial infarction.
          </p>

          <h4>Stable Angina</h4>

          <p>
            Stable angina usually results from fixed atherosclerotic coronary stenosis.
            Symptoms are typically precipitated by exertion or emotional stress and improve with
            rest or reduction of myocardial workload.
          </p>

          <h4>Unstable Angina</h4>

          <p>
            Unstable angina commonly results from disruption of an atherosclerotic plaque with
            formation of a non-occlusive or intermittently occlusive thrombus.
            It represents an acute coronary syndrome and carries a significant risk of myocardial
            infarction.
          </p>

          <h4>Vasospastic Angina</h4>

          <p>
            Vasospastic angina results from transient coronary artery vasoconstriction.
            The resulting reduction in coronary blood flow can produce myocardial ischemia even
            without severe fixed coronary stenosis.
          </p>

          <h3>6. Acute Coronary Syndrome</h3>

          <p>
            Acute coronary syndrome (ACS) refers to a spectrum of acute coronary ischemic conditions,
            principally unstable angina and acute myocardial infarction.
          </p>

          <p>
            A common underlying mechanism is disruption of an atherosclerotic plaque followed by
            platelet activation, coagulation, thrombus formation, and reduction or interruption
            of coronary blood flow.
          </p>

          <h3>7. Myocardial Infarction</h3>

          <p>
            Myocardial infarction (MI) is myocardial injury resulting from acute myocardial ischemia
            with evidence of cardiomyocyte necrosis.
          </p>

          <p>
            A common mechanism is rupture or erosion of an atherosclerotic coronary plaque followed
            by formation of an occlusive thrombus.
          </p>

          <h4>Pathogenesis of Myocardial Infarction</h4>

          <ol>
            <li>Atherosclerotic plaque develops within a coronary artery.</li>
            <li>The plaque becomes unstable or undergoes erosion.</li>
            <li>Thrombogenic material becomes exposed to circulating blood.</li>
            <li>Platelets adhere and become activated.</li>
            <li>Platelet aggregation occurs.</li>
            <li>The coagulation cascade is activated.</li>
            <li>A coronary thrombus develops.</li>
            <li>Coronary blood flow becomes severely reduced or completely interrupted.</li>
            <li>Myocardial ischemia develops.</li>
            <li>Prolonged severe ischemia causes irreversible cardiomyocyte injury.</li>
            <li>Coagulative necrosis develops.</li>
          </ol>

          <h3>8. Types of Myocardial Infarction</h3>

          <p>
            Myocardial infarction can be classified according to mechanism. Important categories
            include infarction caused by acute atherothrombotic coronary disease, infarction secondary
            to an imbalance between myocardial oxygen supply and demand, and infarction associated
            with other coronary or procedural mechanisms.
          </p>

          <h3>9. Transmural and Subendocardial Infarction</h3>

          <p>
            A transmural infarction involves a large portion of the ventricular wall extending
            through much or all of the myocardial thickness.
          </p>

          <p>
            A subendocardial infarction predominantly affects the inner myocardial layers.
            The subendocardium is particularly vulnerable to ischemia because of its high metabolic
            demand and compression of intramyocardial vessels during systole.
          </p>

          <h3>10. Morphological Changes After Myocardial Infarction</h3>

          <p>
            Myocardial infarction produces a characteristic temporal sequence of cellular,
            inflammatory, and reparative changes.
          </p>

          <h4>Early Phase</h4>

          <ul>
            <li>Loss of myocardial contractility</li>
            <li>Cellular ATP depletion</li>
            <li>Cell swelling</li>
            <li>Mitochondrial injury</li>
            <li>Coagulative necrosis</li>
          </ul>

          <h4>Inflammatory Phase</h4>

          <p>
            Necrotic myocardium stimulates an inflammatory response. Neutrophils initially infiltrate
            the injured tissue, followed by macrophages that remove necrotic cellular debris.
          </p>

          <h4>Repair Phase</h4>

          <p>
            Fibroblasts proliferate and deposit extracellular matrix. New blood vessels develop within
            the healing tissue, followed by progressive collagen deposition and scar formation.
          </p>

          <p>
            Mature myocardial infarction scars consist predominantly of dense collagenous connective
            tissue rather than functional cardiomyocytes.
          </p>

          <h3>11. Complications of Myocardial Infarction</h3>

          <ul>
            <li>Arrhythmias</li>
            <li>Acute heart failure</li>
            <li>Cardiogenic shock</li>
            <li>Papillary muscle dysfunction or rupture</li>
            <li>Ventricular septal rupture</li>
            <li>Free-wall rupture</li>
            <li>Pericarditis</li>
            <li>Ventricular aneurysm</li>
            <li>Mural thrombus</li>
            <li>Systemic thromboembolism</li>
            <li>Sudden cardiac death</li>
          </ul>

          <h3>12. Myocardial Stunning</h3>

          <p>
            Myocardial stunning refers to transient mechanical dysfunction that persists after
            restoration of coronary blood flow despite the absence of irreversible myocardial necrosis.
          </p>

          <p>
            Abnormal calcium handling, oxidative stress, and temporary contractile dysfunction
            contribute to the phenomenon.
          </p>

          <h3>13. Myocardial Hibernation</h3>

          <p>
            Myocardial hibernation is a state of persistent or recurrent myocardial dysfunction
            associated with chronically reduced coronary perfusion. The myocardium reduces its
            contractile activity in an adaptive attempt to maintain cellular viability.
          </p>

          <p>
            Restoration of adequate coronary perfusion may allow improvement in myocardial function
            when viable myocardium remains.
          </p>

          <h3>14. Heart Failure</h3>

          <p>
            Heart failure is a clinical syndrome caused by structural and/or functional cardiac
            abnormalities that result in impaired cardiac output, elevated intracardiac pressures,
            or both.
          </p>

          <p>
            Heart failure can result from abnormalities of systolic contraction, diastolic relaxation
            and filling, valvular function, rhythm, coronary perfusion, or combinations of these
            mechanisms.
          </p>

          <h3>15. Left-Sided Heart Failure</h3>

          <p>
            Left-sided heart failure occurs when the left ventricle cannot adequately pump blood
            into the systemic circulation or cannot accommodate venous return without excessive
            filling pressures.
          </p>

          <p>
            Increased left atrial and pulmonary venous pressure can result in pulmonary congestion
            and pulmonary edema.
          </p>

          <h4>Clinical Manifestations</h4>

          <ul>
            <li>Dyspnea</li>
            <li>Orthopnea</li>
            <li>Paroxysmal nocturnal dyspnea</li>
            <li>Fatigue</li>
            <li>Reduced exercise tolerance</li>
            <li>Pulmonary crackles</li>
            <li>Acute pulmonary edema in severe cases</li>
          </ul>

          <h3>16. Right-Sided Heart Failure</h3>

          <p>
            Right-sided heart failure occurs when the right ventricle cannot adequately pump blood
            through the pulmonary circulation.
          </p>

          <p>
            Increased systemic venous pressure produces systemic venous congestion.
          </p>

          <ul>
            <li>Peripheral edema</li>
            <li>Raised jugular venous pressure</li>
            <li>Hepatic congestion</li>
            <li>Ascites</li>
            <li>Peripheral weight gain from fluid retention</li>
          </ul>

          <h3>17. Biventricular Heart Failure</h3>

          <p>
            Both ventricles may be affected simultaneously. Advanced left-sided failure can increase
            pulmonary vascular pressures and eventually produce secondary right ventricular dysfunction.
          </p>

          <h3>18. Heart Failure With Reduced Ejection Fraction</h3>

          <p>
            Heart failure with reduced ejection fraction (HFrEF) is characterized predominantly by
            impaired left ventricular systolic function and reduced ejection fraction.
          </p>

          <p>
            Common causes include ischemic myocardial damage, dilated cardiomyopathy, myocarditis,
            and some forms of toxic or genetic cardiomyopathy.
          </p>

          <h3>19. Heart Failure With Preserved Ejection Fraction</h3>

          <p>
            Heart failure with preserved ejection fraction (HFpEF) is characterized by clinical
            heart failure despite relatively preserved left ventricular ejection fraction.
          </p>

          <p>
            Abnormal ventricular relaxation, increased ventricular stiffness, impaired filling,
            vascular dysfunction, and systemic metabolic abnormalities can contribute.
          </p>

          <h3>20. Compensatory Mechanisms in Heart Failure</h3>

          <p>
            The body initially attempts to maintain cardiac output through several compensatory
            mechanisms.
          </p>

          <ul>
            <li>Sympathetic nervous system activation</li>
            <li>Renin-angiotensin-aldosterone system activation</li>
            <li>Increased heart rate</li>
            <li>Increased contractility</li>
            <li>Peripheral vasoconstriction</li>
            <li>Renal sodium and water retention</li>
            <li>Ventricular remodeling</li>
          </ul>

          <p>
            Although initially compensatory, chronic activation of these pathways increases myocardial
            workload and can promote pathological remodeling.
          </p>

          <h3>21. Ventricular Remodeling</h3>

          <p>
            Ventricular remodeling refers to changes in ventricular size, shape, wall thickness,
            extracellular matrix, cellular composition, and molecular signaling following myocardial
            injury or chronic hemodynamic stress.
          </p>

          <p>
            Remodeling can involve hypertrophy, dilation, fibrosis, changes in contractile proteins,
            alterations in calcium handling, and changes in energy metabolism.
          </p>

          <h3>22. Cardiac Arrhythmias</h3>

          <p>
            Arrhythmias are abnormalities of cardiac rhythm, rate, impulse formation, or impulse
            conduction.
          </p>

          <p>
            They may arise from abnormal automaticity, triggered activity, re-entry, conduction
            block, abnormal refractoriness, structural remodeling, ischemia, electrolyte disturbances,
            drugs, or inherited channelopathies.
          </p>

          <h3>23. Sinus Bradycardia</h3>

          <p>
            Sinus bradycardia is a sinus rhythm with a slower-than-expected heart rate.
            It may occur physiologically during sleep or in trained individuals, or pathologically
            because of increased vagal tone, sinus-node disease, medications, metabolic disorders,
            or other systemic conditions.
          </p>

          <h3>24. Sinus Tachycardia</h3>

          <p>
            Sinus tachycardia is an increased heart rate originating from the sinoatrial node.
            Common physiological and pathological causes include exercise, fever, pain, anxiety,
            anemia, hypovolemia, hypoxia, infection, and increased sympathetic activity.
          </p>

          <h3>25. Atrial Fibrillation</h3>

          <p>
            Atrial fibrillation is a supraventricular arrhythmia characterized by chaotic atrial
            electrical activity and ineffective atrial contraction.
          </p>

          <p>
            The atria do not contract in an organized manner. This promotes blood stasis, particularly
            within the left atrial appendage, increasing the risk of thrombus formation and systemic
            thromboembolism.
          </p>

          <h3>26. Atrial Flutter</h3>

          <p>
            Atrial flutter is usually produced by a large re-entry circuit within the atrium,
            commonly involving the right atrium.
          </p>

          <p>
            The atrial rate is typically rapid and organized, although only some atrial impulses
            may conduct to the ventricles.
          </p>

          <h3>27. Supraventricular Tachycardia</h3>

          <p>
            Supraventricular tachycardias originate above the ventricular conduction system.
            Mechanisms include re-entry involving the atrioventricular node or accessory pathways
            and abnormal atrial automaticity.
          </p>

          <h3>28. Ventricular Tachycardia</h3>

          <p>
            Ventricular tachycardia originates within ventricular myocardium or the ventricular
            conduction system.
          </p>

          <p>
            It may occur in the setting of myocardial infarction scars, cardiomyopathy, electrolyte
            abnormalities, or inherited electrical disorders.
          </p>

          <p>
            Sustained ventricular tachycardia can significantly reduce cardiac output and may
            deteriorate into ventricular fibrillation.
          </p>

          <h3>29. Ventricular Fibrillation</h3>

          <p>
            Ventricular fibrillation is characterized by chaotic ventricular electrical activity
            without effective coordinated ventricular contraction.
          </p>

          <p>
            Because effective cardiac output is essentially lost, ventricular fibrillation is a
            medical emergency and a major cause of sudden cardiac death.
          </p>

          <h3>30. Atrioventricular Heart Block</h3>

          <p>
            Atrioventricular block occurs when conduction of electrical impulses from the atria
            to the ventricles is delayed or interrupted.
          </p>

          <h4>First-Degree AV Block</h4>

          <p>
            All atrial impulses conduct to the ventricles, but conduction through the AV node or
            conduction system is prolonged.
          </p>

          <h4>Second-Degree AV Block</h4>

          <p>
            Some atrial impulses fail to conduct to the ventricles.
          </p>

          <h4>Third-Degree AV Block</h4>

          <p>
            Complete heart block occurs when atrial impulses do not conduct to the ventricles.
            The atria and ventricles therefore beat independently.
          </p>

          <h3>31. Sick Sinus Syndrome</h3>

          <p>
            Sick sinus syndrome describes dysfunction of the sinoatrial node and may manifest as
            inappropriate sinus bradycardia, sinus pauses, sinus arrest, chronotropic incompetence,
            or alternating bradycardia and atrial tachyarrhythmias.
          </p>

          <h3>32. Valvular Heart Disease</h3>

          <p>
            Valvular heart disease involves structural or functional abnormalities of the cardiac
            valves that cause either obstruction to forward blood flow or abnormal backward flow.
          </p>

          <p>
            The two fundamental hemodynamic lesions are:
          </p>

          <ul>
            <li><strong>Stenosis</strong> — impaired opening of the valve</li>
            <li><strong>Regurgitation</strong> — incomplete closure of the valve</li>
          </ul>

          <h3>33. Mitral Stenosis</h3>

          <p>
            Mitral stenosis is narrowing of the mitral valve orifice, producing resistance to
            blood flow from the left atrium into the left ventricle during diastole.
          </p>

          <p>
            Rheumatic heart disease is an important cause globally.
          </p>

          <p>
            Increased left atrial pressure can lead to pulmonary venous congestion, pulmonary
            hypertension, and eventually right-sided heart failure.
          </p>

          <h3>34. Mitral Regurgitation</h3>

          <p>
            Mitral regurgitation occurs when the mitral valve fails to close adequately during
            ventricular systole, allowing blood to flow from the left ventricle back into the
            left atrium.
          </p>

          <p>
            Causes include degenerative valve disease, ischemic papillary muscle dysfunction,
            rheumatic disease, infective endocarditis, and functional ventricular dilation.
          </p>

          <p>
            Chronic mitral regurgitation produces volume overload of the left atrium and left ventricle.
          </p>

          <h3>35. Aortic Stenosis</h3>

          <p>
            Aortic stenosis is obstruction of left ventricular outflow at the level of the aortic valve.
          </p>

          <p>
            Causes include age-related calcific degeneration, congenital bicuspid aortic valve,
            and rheumatic valve disease.
          </p>

          <p>
            Chronic pressure overload produces concentric left ventricular hypertrophy.
          </p>

          <h3>36. Aortic Regurgitation</h3>

          <p>
            Aortic regurgitation occurs when the aortic valve fails to close completely during
            diastole, allowing blood to flow back into the left ventricle.
          </p>

          <p>
            Causes include degenerative valve disease, congenital abnormalities, aortic root
            disease, infective endocarditis, and rheumatic disease.
          </p>

          <p>
            Chronic aortic regurgitation produces left ventricular volume overload and eccentric
            ventricular hypertrophy.
          </p>

          <h3>37. Tricuspid Valve Disease</h3>

          <p>
            Tricuspid disease may involve stenosis or regurgitation.
            Tricuspid regurgitation is frequently functional and can result from right ventricular
            dilation or pulmonary hypertension.
          </p>

          <p>
            Severe tricuspid disease can produce systemic venous congestion, peripheral edema,
            hepatic congestion, and ascites.
          </p>

          <h3>38. Pulmonary Valve Disease</h3>

          <p>
            Pulmonary valve disease may cause pulmonary stenosis or pulmonary regurgitation.
            Pulmonary stenosis increases right ventricular pressure and may produce right ventricular
            hypertrophy.
          </p>

          <h3>39. Cardiomyopathy</h3>

          <p>
            Cardiomyopathies are diseases of the myocardium associated with mechanical and/or
            electrical dysfunction that may result in ventricular hypertrophy, dilation, fibrosis,
            arrhythmias, or heart failure.
          </p>

          <h3>40. Dilated Cardiomyopathy</h3>

          <p>
            Dilated cardiomyopathy is characterized by ventricular dilation and impaired systolic
            contraction.
          </p>

          <p>
            Causes may include genetic abnormalities, viral or inflammatory myocardial injury,
            alcohol, certain drugs and toxins, metabolic disorders, nutritional deficiencies,
            and pregnancy-associated disease.
          </p>

          <p>
            The ventricles become enlarged and contractile function decreases, resulting in reduced
            ejection fraction and systolic heart failure.
          </p>

          <h3>41. Hypertrophic Cardiomyopathy</h3>

          <p>
            Hypertrophic cardiomyopathy is characterized by abnormal myocardial hypertrophy that
            is frequently associated with genetic abnormalities involving sarcomeric proteins.
          </p>

          <p>
            The hypertrophy may be asymmetric and often involves the interventricular septum.
          </p>

          <p>
            Consequences include:
          </p>

          <ul>
            <li>Diastolic dysfunction</li>
            <li>Myocardial ischemia</li>
            <li>Dynamic left ventricular outflow obstruction in some patients</li>
            <li>Atrial enlargement</li>
            <li>Ventricular arrhythmias</li>
            <li>Sudden cardiac death</li>
          </ul>

          <h3>42. Restrictive Cardiomyopathy</h3>

          <p>
            Restrictive cardiomyopathy is characterized predominantly by impaired ventricular
            relaxation and filling due to increased myocardial stiffness.
          </p>

          <p>
            Causes include infiltrative disorders such as amyloidosis, certain storage diseases,
            fibrosis, and other myocardial disorders.
          </p>

          <h3>43. Arrhythmogenic Cardiomyopathy</h3>

          <p>
            Arrhythmogenic cardiomyopathy is an inherited myocardial disease characterized by
            ventricular arrhythmias and structural myocardial abnormalities.
          </p>

          <p>
            Abnormalities in proteins involved in intercellular adhesion, particularly desmosomal
            proteins in many cases, can contribute to cardiomyocyte loss and replacement by
            fibrofatty tissue.
          </p>

          <h3>44. Myocarditis</h3>

          <p>
            Myocarditis is inflammation of the myocardium associated with cardiomyocyte injury.
            Infectious and immune-mediated mechanisms can produce myocardial inflammation.
          </p>

          <h4>Causes</h4>

          <ul>
            <li>Viral infections</li>
            <li>Bacterial infections</li>
            <li>Parasitic infections</li>
            <li>Fungal infections</li>
            <li>Autoimmune disorders</li>
            <li>Drug-related hypersensitivity</li>
            <li>Toxin exposure</li>
          </ul>

          <h4>Pathological Findings</h4>

          <p>
            Histological findings may include inflammatory infiltrates, cardiomyocyte injury or
            necrosis, and interstitial edema. The pattern of inflammation varies with the cause.
          </p>

          <p>
            Myocarditis can produce chest pain, arrhythmias, impaired ventricular function,
            acute heart failure, or sudden cardiac death.
          </p>

          <h3>45. Endocarditis</h3>

          <p>
            Endocarditis is inflammation and infection of the endocardial surface, most importantly
            the cardiac valves.
          </p>

          <p>
            Infective endocarditis is commonly caused by bacteria and occasionally fungi.
          </p>

          <h4>Vegetations</h4>

          <p>
            Characteristic lesions are vegetations consisting of fibrin, platelets, inflammatory
            material, microorganisms, and necrotic tissue.
          </p>

          <p>
            Vegetations can damage valves and release emboli into the systemic or pulmonary circulation
            depending on the affected side of the heart.
          </p>

          <h3>46. Acute Infective Endocarditis</h3>

          <p>
            Acute infective endocarditis can involve previously normal valves and may cause rapidly
            destructive valve lesions.
          </p>

          <p>
            Complications include:
          </p>

          <ul>
            <li>Acute valvular regurgitation</li>
            <li>Heart failure</li>
            <li>Sepsis</li>
            <li>Systemic embolization</li>
            <li>Myocardial abscess</li>
            <li>Conduction abnormalities</li>
          </ul>

          <h3>47. Subacute Infective Endocarditis</h3>

          <p>
            Subacute infection tends to develop more gradually and frequently affects previously
            abnormal valves or prosthetic material.
          </p>

          <p>
            Persistent fever, fatigue, weight loss, anemia, embolic phenomena, and cardiac murmurs
            may occur.
          </p>

          <h3>48. Pericarditis</h3>

          <p>
            Pericarditis is inflammation of the pericardium.
          </p>

          <p>
            Causes include infections, autoimmune diseases, myocardial infarction, malignancy,
            renal failure, trauma, and certain medications.
          </p>

          <h4>Types of Pericarditis</h4>

          <ul>
            <li>Serous pericarditis</li>
            <li>Fibrinous pericarditis</li>
            <li>Purulent pericarditis</li>
            <li>Hemorrhagic pericarditis</li>
            <li>Caseous pericarditis</li>
          </ul>

          <h3>49. Fibrinous Pericarditis</h3>

          <p>
            Fibrinous pericarditis is characterized by deposition of fibrin on the pericardial surfaces.
            It may produce a characteristic friction rub.
          </p>

          <p>
            Healing can result in organization and fibrosis, potentially producing adhesions between
            the visceral and parietal pericardium.
          </p>

          <h3>50. Pericardial Effusion</h3>

          <p>
            Pericardial effusion is accumulation of excess fluid within the pericardial cavity.
          </p>

          <p>
            Causes include inflammation, infection, malignancy, renal disease, trauma, autoimmune
            disease, and complications of cardiac injury.
          </p>

          <h3>51. Cardiac Tamponade</h3>

          <p>
            Cardiac tamponade occurs when accumulated pericardial fluid or blood increases
            intrapericardial pressure sufficiently to impair cardiac filling.
          </p>

          <p>
            Reduced ventricular filling causes reduced stroke volume and cardiac output.
            Severe tamponade can produce obstructive shock and death if not rapidly treated.
          </p>

          <h3>52. Constrictive Pericarditis</h3>

          <p>
            Constrictive pericarditis occurs when the pericardium becomes thickened, fibrotic,
            and sometimes calcified, restricting normal ventricular filling.
          </p>

          <p>
            The major physiological abnormality is impaired diastolic filling caused by a rigid
            pericardial envelope.
          </p>

          <h3>53. Hypertensive Heart Disease</h3>

          <p>
            Chronic systemic hypertension increases left ventricular afterload.
            The left ventricle responds initially through concentric hypertrophy.
          </p>

          <p>
            Long-standing hypertension can eventually produce myocardial fibrosis, impaired
            relaxation, coronary microvascular dysfunction, atrial enlargement, systolic dysfunction,
            and heart failure.
          </p>

          <h3>54. Pulmonary Hypertension and Cor Pulmonale</h3>

          <p>
            Chronic pulmonary hypertension increases the workload imposed on the right ventricle.
            The right ventricle initially undergoes hypertrophy and may eventually dilate and fail.
          </p>

          <p>
            Right heart disease caused by pulmonary hypertension secondary to pulmonary disease
            or pulmonary vascular disease is termed cor pulmonale.
          </p>

          <h3>55. Rheumatic Heart Disease</h3>

          <p>
            Rheumatic heart disease is a chronic consequence of acute rheumatic fever.
            It results from immune-mediated injury following infection with certain strains of
            group A streptococci.
          </p>

          <p>
            Repeated or severe inflammation can produce permanent valvular fibrosis and deformity.
            The mitral valve is particularly commonly affected.
          </p>

          <h3>56. Congenital Heart Disease</h3>

          <p>
            Congenital heart diseases are structural abnormalities of the heart or great vessels
            present at birth.
          </p>

          <h4>Major Examples</h4>

          <ul>
            <li>Atrial septal defect</li>
            <li>Ventricular septal defect</li>
            <li>Patent ductus arteriosus</li>
            <li>Coarctation of the aorta</li>
            <li>Tetralogy of Fallot</li>
            <li>Transposition of the great arteries</li>
            <li>Truncus arteriosus</li>
            <li>Total anomalous pulmonary venous connection</li>
            <li>Pulmonary valve stenosis</li>
            <li>Aortic valve abnormalities</li>
          </ul>

          <h3>57. Atrial Septal Defect</h3>

          <p>
            An atrial septal defect is an abnormal communication between the right and left atria.
            Depending on the type and size of the defect, blood commonly moves from the higher-pressure
            left atrium to the right atrium.
          </p>

          <p>
            Chronic left-to-right shunting can produce right atrial and right ventricular volume
            overload and, in advanced cases, pulmonary hypertension.
          </p>

          <h3>58. Ventricular Septal Defect</h3>

          <p>
            A ventricular septal defect is an abnormal opening between the ventricles.
            A significant defect can produce a left-to-right shunt, pulmonary overcirculation,
            and ventricular volume and pressure abnormalities.
          </p>

          <h3>59. Patent Ductus Arteriosus</h3>

          <p>
            Patent ductus arteriosus is persistence after birth of the fetal connection between
            the pulmonary artery and aorta.
          </p>

          <p>
            Persistent left-to-right flow can increase pulmonary blood flow and produce cardiac
            volume overload.
          </p>

          <h3>60. Tetralogy of Fallot</h3>

          <p>
            Tetralogy of Fallot is characterized by four major anatomical abnormalities:
          </p>

          <ul>
            <li>Ventricular septal defect</li>
            <li>Right ventricular outflow obstruction</li>
            <li>Overriding aorta</li>
            <li>Right ventricular hypertrophy</li>
          </ul>

          <p>
            The severity of cyanosis depends largely on the degree of right ventricular outflow
            obstruction and the resulting right-to-left shunting.
          </p>

          <h3>61. Transposition of the Great Arteries</h3>

          <p>
            Transposition of the great arteries occurs when the aorta arises from the right ventricle
            and the pulmonary artery arises from the left ventricle.
          </p>

          <p>
            This creates parallel rather than normal serial circulations. Survival after birth
            therefore depends on adequate mixing between the pulmonary and systemic circulations.
          </p>

          <h3>62. Coarctation of the Aorta</h3>

          <p>
            Coarctation of the aorta is a congenital narrowing of the aorta, classically occurring
            near the region of the ductus arteriosus.
          </p>

          <p>
            It produces increased pressure proximal to the obstruction and reduced pressure distal
            to the obstruction.
          </p>

          <h3>63. Cardiac Fibrosis</h3>

          <p>
            Cardiac fibrosis involves excessive deposition of extracellular matrix, particularly
            collagen, within the myocardium.
          </p>

          <p>
            Fibrosis can develop after myocardial infarction, chronic hypertension, cardiomyopathy,
            aging, inflammation, and chronic heart failure.
          </p>

          <p>
            Fibrotic tissue reduces myocardial compliance and can disrupt electrical conduction,
            creating a substrate for arrhythmias.
          </p>

          <h3>64. Myocardial Hypertrophy</h3>

          <p>
            Myocardial hypertrophy is an increase in cardiomyocyte size and myocardial mass.
          </p>

          <p>
            It can develop in response to chronic pressure overload, such as hypertension or
            aortic stenosis, or volume overload, such as chronic valvular regurgitation.
          </p>

          <h4>Concentric Hypertrophy</h4>

          <p>
            Concentric hypertrophy is associated primarily with pressure overload and is characterized
            by increased ventricular wall thickness with relatively reduced chamber enlargement.
          </p>

          <h4>Eccentric Hypertrophy</h4>

          <p>
            Eccentric hypertrophy is associated primarily with volume overload and is characterized
            by ventricular dilation with increased myocardial mass.
          </p>

          <h3>65. Cardiac Amyloidosis</h3>

          <p>
            Cardiac amyloidosis occurs when abnormal amyloid proteins deposit within the myocardium.
            The deposits increase myocardial stiffness and interfere with normal ventricular filling.
          </p>

          <p>
            It is an important cause of restrictive cardiomyopathy.
          </p>

          <h3>66. Hemochromatosis and the Heart</h3>

          <p>
            Iron overload can result in deposition of iron within cardiomyocytes.
            Iron can promote oxidative injury and mitochondrial dysfunction.
          </p>

          <p>
            Cardiac iron overload can produce cardiomyopathy, arrhythmias, and heart failure.
          </p>

          <h3>67. Sarcoidosis of the Heart</h3>

          <p>
            Cardiac sarcoidosis is characterized by granulomatous inflammation involving the myocardium
            and conduction system.
          </p>

          <p>
            It can produce conduction abnormalities, ventricular arrhythmias, heart failure,
            and sudden cardiac death.
          </p>

          <h3>68. Cardiac Tumors</h3>

          <p>
            Primary cardiac tumors are uncommon. They may be benign or malignant.
            Metastatic tumors involving the heart are more common than primary malignant cardiac tumors.
          </p>

          <h4>Myxoma</h4>

          <p>
            Atrial myxoma is the most common primary cardiac tumor in adults.
            It most frequently arises in the left atrium and may interfere with mitral valve flow,
            produce positional symptoms, or cause embolization.
          </p>

          <h4>Rhabdomyoma</h4>

          <p>
            Cardiac rhabdomyoma is a benign tumor occurring particularly in children.
            It can be associated with tuberous sclerosis and may involve the ventricular myocardium.
          </p>

          <h4>Cardiac Sarcomas</h4>

          <p>
            Primary malignant tumors of the heart include various sarcomas.
            They can infiltrate myocardium, obstruct blood flow, invade valves, or produce pericardial
            effusion.
          </p>

          <h3>69. Cardiac Metastases</h3>

          <p>
            Malignant tumors from other organs can metastasize to the pericardium, myocardium,
            endocardium, or cardiac chambers.
          </p>

          <p>
            Cardiac involvement can cause pericardial effusion, arrhythmias, obstruction, or heart
            failure depending on the site and extent of disease.
          </p>

          <h3>70. Cardiac Thrombus</h3>

          <p>
            Intracardiac thrombi can develop when blood stasis, endothelial injury, and hypercoagulability
            promote thrombogenesis.
          </p>

          <p>
            Common settings include atrial fibrillation, ventricular aneurysm following myocardial
            infarction, severe ventricular dysfunction, and prosthetic valves.
          </p>

          <p>
            Left-sided cardiac thrombi can produce systemic arterial emboli, while right-sided
            thrombi can embolize to the pulmonary circulation.
          </p>

          <h3>71. Cardiac Embolism</h3>

          <p>
            Cardioembolic disease occurs when thrombotic material originating within the heart
            travels through the circulation and obstructs a distant artery.
          </p>

          <p>
            Atrial fibrillation is an important cause of systemic cardioembolic stroke.
          </p>

          <h3>72. Sudden Cardiac Death</h3>

          <p>
            Sudden cardiac death is unexpected death caused by a cardiac condition occurring
            within a short period after the onset of symptoms.
          </p>

          <p>
            Important mechanisms include ventricular fibrillation, ventricular tachycardia,
            severe bradyarrhythmia, conduction block, acute myocardial ischemia, and inherited
            electrical or structural cardiac diseases.
          </p>

          <h3>73. Pathological Mechanisms Leading to Cardiac Failure</h3>

          <p>
            Multiple pathological processes can ultimately converge on impaired cardiac output.
          </p>

          <ul>
            <li>Loss of viable cardiomyocytes</li>
            <li>Reduced contractility</li>
            <li>Abnormal calcium handling</li>
            <li>Excessive ventricular pressure load</li>
            <li>Excessive ventricular volume load</li>
            <li>Myocardial fibrosis</li>
            <li>Ventricular dilation</li>
            <li>Abnormal ventricular stiffness</li>
            <li>Valvular dysfunction</li>
            <li>Coronary ischemia</li>
            <li>Electrical instability</li>
            <li>Mitochondrial dysfunction</li>
          </ul>

          <h3>74. Common Pathological Consequences of Cardiac Disease</h3>

          <ul>
            <li>Reduced cardiac output</li>
            <li>Pulmonary congestion</li>
            <li>Systemic venous congestion</li>
            <li>Peripheral edema</li>
            <li>Exercise intolerance</li>
            <li>Arrhythmias</li>
            <li>Thromboembolism</li>
            <li>Syncope</li>
            <li>Cardiogenic shock</li>
            <li>Sudden cardiac death</li>
          </ul>

          <h3>75. Cardiac Pathology and Biomarkers</h3>

          <p>
            Structural injury to cardiomyocytes can release intracellular proteins into the circulation.
            These biomarkers provide biochemical evidence of myocardial injury.
          </p>

          <ul>
            <li>Cardiac troponin I</li>
            <li>Cardiac troponin T</li>
            <li>CK-MB</li>
            <li>BNP</li>
            <li>NT-proBNP</li>
          </ul>

          <p>
            Cardiac troponins are particularly important for detecting myocardial injury, while BNP
            and NT-proBNP are primarily associated with myocardial wall stress and heart failure.
          </p>

          <h3>76. Histopathological Patterns in Cardiac Disease</h3>

          <p>
            Important histopathological patterns encountered in cardiac pathology include:
          </p>

          <ul>
            <li>Cardiomyocyte hypertrophy</li>
            <li>Cardiomyocyte necrosis</li>
            <li>Interstitial fibrosis</li>
            <li>Replacement fibrosis</li>
            <li>Inflammatory infiltration</li>
            <li>Granulomatous inflammation</li>
            <li>Fatty or fibrofatty replacement</li>
            <li>Calcification</li>
            <li>Amyloid deposition</li>
            <li>Iron deposition</li>
            <li>Vegetation formation</li>
            <li>Thrombus formation</li>
            <li>Myxomatous degeneration</li>
            <li>Vascular atherosclerosis</li>
          </ul>

          <h3>77. General Diagnostic Approach to Cardiac Pathology</h3>

          <p>
            Evaluation of suspected cardiac disease commonly integrates clinical examination,
            electrocardiography, cardiac biomarkers, echocardiography, chest imaging, stress testing,
            coronary imaging, cardiac magnetic resonance imaging, and selected invasive investigations.
          </p>

          <h4>Electrocardiography</h4>

          <p>
            ECG evaluates cardiac electrical activity and can identify ischemia, infarction,
            arrhythmias, conduction abnormalities, hypertrophy patterns, and electrolyte-related
            electrical disturbances.
          </p>

          <h4>Echocardiography</h4>

          <p>
            Echocardiography provides structural and functional assessment of cardiac chambers,
            valves, ventricular function, wall motion, intracardiac pressures, and pericardial fluid.
          </p>

          <h4>Cardiac Magnetic Resonance</h4>

          <p>
            Cardiac MRI provides detailed assessment of myocardial structure, ventricular function,
            edema, fibrosis, scar tissue, infiltration, and tissue characteristics.
          </p>

          <h4>Coronary Angiography</h4>

          <p>
            Coronary angiography allows visualization of the coronary arterial lumen and can identify
            significant stenosis or occlusion.
          </p>

          <h3>78. Relationship Between Pathology and Physiology</h3>

          <p>
            Cardiac pathology should be understood as disruption of normal physiological mechanisms.
            Coronary artery disease interferes with myocardial perfusion. Myocardial infarction
            destroys viable cardiomyocytes. Valvular disease alters pressure and volume relationships.
            Cardiomyopathies alter myocardial structure and contractility. Arrhythmias disrupt
            electrical coordination. Pericardial disease interferes with cardiac filling.
          </p>

          <p>
            These abnormalities frequently interact. For example, coronary artery disease can cause
            myocardial infarction, which can produce ventricular remodeling, which can lead to
            systolic heart failure, ventricular arrhythmias, and sudden cardiac death.
          </p>

          <h3>79. Integrated Pathological Progression of Ischemic Heart Disease</h3>

          <p>
            A simplified progression of advanced ischemic cardiac disease can be represented as:
          </p>

          <p>
            <strong>
              Cardiovascular risk factors → endothelial dysfunction → atherosclerosis →
              coronary plaque → stenosis or plaque disruption → coronary thrombosis →
              myocardial ischemia → cardiomyocyte injury → myocardial infarction →
              inflammation and scar formation → ventricular remodeling →
              heart failure and/or arrhythmia → possible sudden cardiac death
            </strong>
          </p>

          <h3>80. Integrated Summary of Heart Pathology</h3>

          <p>
            Cardiac disease encompasses abnormalities of coronary perfusion, myocardium, valves,
            endocardium, pericardium, conduction tissue, and great vessels. Coronary artery disease
            remains a major cause of myocardial ischemia and infarction, while chronic pressure or
            volume overload can produce myocardial hypertrophy and eventually heart failure.
          </p>

          <p>
            Myocardial infarction causes irreversible cardiomyocyte injury and necrosis when ischemia
            persists beyond the threshold for cellular recovery. The subsequent inflammatory and
            reparative response replaces necrotic myocardium with fibrous scar, which can impair
            ventricular function and provide a substrate for arrhythmias.
          </p>

          <p>
            Heart failure represents the final common pathway of numerous structural and functional
            cardiac disorders. Neurohormonal activation initially supports circulation but chronic
            activation promotes vasoconstriction, fluid retention, hypertrophy, fibrosis, and
            pathological ventricular remodeling.
          </p>

          <p>
            Arrhythmias arise from abnormalities of impulse generation or conduction and may range
            from clinically insignificant rhythm changes to life-threatening ventricular fibrillation.
            Valvular disorders produce pressure or volume overload, while cardiomyopathies primarily
            affect myocardial structure and function.
          </p>

          <p>
            Inflammatory diseases such as myocarditis, endocarditis, and pericarditis can cause
            direct tissue injury, impaired cardiac function, valvular destruction, pericardial
            effusion, or systemic complications. Congenital heart diseases result from abnormal
            cardiac development and may alter intracardiac pressure, blood flow, oxygenation,
            or circulation from birth.
          </p>

          <p>
            Ultimately, many forms of cardiac pathology converge on a limited number of major
            physiological consequences: impaired myocardial perfusion, impaired contraction,
            impaired relaxation, abnormal electrical activity, abnormal blood flow through the
            chambers or valves, reduced cardiac output, congestion, thromboembolism, and death.
          </p>
        `,



        microbiology: `
          <h2>Cardiovascular Microbiology</h2>

          <h3>Infective Endocarditis</h3>
          <p>
            Infective endocarditis is infection of the endocardial surface, particularly the cardiac
            valves. Vegetations composed of microorganisms, fibrin and platelets may develop on affected
            valves.
          </p>

          <ul>
            <li><strong>Staphylococcus aureus</strong> – important cause of acute infective endocarditis.</li>
            <li><strong>Viridans group streptococci</strong> – associated with subacute endocarditis.</li>
            <li><strong>Enterococcus species</strong> – important cause of endocarditis, particularly in certain healthcare-associated and genitourinary contexts.</li>
            <li><strong>Coagulase-negative staphylococci</strong> – important particularly with prosthetic valves and implanted devices.</li>
          </ul>

          <h3>Rheumatic Heart Disease</h3>
          <p>
            Rheumatic heart disease is a chronic consequence of acute rheumatic fever following
            infection with certain strains of group A Streptococcus. The mitral valve is commonly
            affected.
          </p>

          <h3>Viral Myocarditis</h3>
          <p>
            Various viruses can cause myocarditis, resulting in inflammatory injury to cardiac muscle.
          </p>
        `,

        immunology: `
          <h2>Heart Immunology</h2>

          <h3>Inflammation</h3>
          <p>
            Inflammatory responses contribute to several cardiovascular diseases, including myocarditis,
            atherosclerosis and infective endocarditis.
          </p>

          <h3>Atherosclerosis</h3>
          <p>
            Atherosclerosis involves chronic inflammatory processes within the arterial wall. Lipid
            accumulation, endothelial dysfunction, immune-cell recruitment and plaque formation contribute
            to progressive vascular disease.
          </p>

          <h3>Autoimmune Cardiac Disease</h3>
          <p>
            Immune-mediated mechanisms can contribute to diseases affecting the myocardium, pericardium
            and vascular system.
          </p>
        `,
              
        pharmacology: `
          <h2>Cardiovascular Pharmacology</h2>

          <p>
            Cardiovascular pharmacology is the study of drugs that modify cardiac function,
            vascular tone, blood pressure, blood volume, coagulation, platelet activity,
            lipid metabolism, cardiac rhythm, and myocardial oxygen demand. Cardiovascular
            drugs act on multiple physiological systems including the renin-angiotensin-
            aldosterone system, sympathetic nervous system, calcium channels, sodium channels,
            potassium channels, renal sodium handling, vascular smooth muscle, platelet
            activation, and the coagulation cascade.
          </p>

          <p>
            Cardiovascular pharmacotherapy is used in the management of hypertension, heart
            failure, coronary artery disease, acute coronary syndromes, arrhythmias, valvular
            disease, thromboembolic disorders, dyslipidemia, and other cardiovascular conditions.
          </p>

          <h3>1. Major Categories of Cardiovascular Drugs</h3>

          <ul>
            <li>Antihypertensive drugs</li>
            <li>Diuretics</li>
            <li>Drugs for heart failure</li>
            <li>Antianginal drugs</li>
            <li>Antiplatelet drugs</li>
            <li>Anticoagulants</li>
            <li>Thrombolytic drugs</li>
            <li>Antiarrhythmic drugs</li>
            <li>Lipid-lowering drugs</li>
            <li>Vasodilators</li>
            <li>Positive inotropic agents</li>
            <li>Cardiac glycosides</li>
            <li>Drugs affecting the renin-angiotensin-aldosterone system</li>
            <li>Drugs affecting sympathetic activity</li>
            <li>Drugs used in hypertensive emergencies</li>
            <li>Drugs used in cardiogenic shock</li>
            <li>Drugs used in pulmonary hypertension</li>
          </ul>

          <h3>2. Antihypertensive Drugs</h3>

          <p>
            Antihypertensive drugs lower arterial blood pressure by reducing cardiac output,
            systemic vascular resistance, circulating blood volume, or combinations of these
            mechanisms.
          </p>

          <p>
            Major antihypertensive classes include:
          </p>

          <ul>
            <li>ACE inhibitors</li>
            <li>Angiotensin II receptor blockers</li>
            <li>Angiotensin receptor-neprilysin inhibitors</li>
            <li>Calcium-channel blockers</li>
            <li>Beta-adrenergic blockers</li>
            <li>Thiazide and thiazide-like diuretics</li>
            <li>Loop diuretics</li>
            <li>Mineralocorticoid receptor antagonists</li>
            <li>Alpha-adrenergic blockers</li>
            <li>Central sympatholytic drugs</li>
            <li>Direct vasodilators</li>
          </ul>

          <h3>3. ACE Inhibitors</h3>

          <p>
            Angiotensin-converting enzyme (ACE) inhibitors inhibit the conversion of
            angiotensin I to angiotensin II.
          </p>

          <p>
            ACE also degrades bradykinin. ACE inhibition therefore increases bradykinin
            concentrations in addition to reducing angiotensin II production.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Enalapril</li>
            <li>Lisinopril</li>
            <li>Ramipril</li>
            <li>Captopril</li>
            <li>Perindopril</li>
            <li>Quinapril</li>
          </ul>

          <h4>Mechanism</h4>

          <p>
            Reduced angiotensin II causes reduced vasoconstriction and reduced aldosterone
            secretion. Reduced aldosterone decreases sodium and water retention.
          </p>

          <p>
            The overall effects include:
          </p>

          <ul>
            <li>Reduced systemic vascular resistance</li>
            <li>Reduced blood pressure</li>
            <li>Reduced sodium and water retention</li>
            <li>Reduced preload</li>
            <li>Reduced afterload</li>
            <li>Reduced pathological cardiac remodeling</li>
          </ul>

          <h4>Clinical Uses</h4>

          <ul>
            <li>Hypertension</li>
            <li>Heart failure</li>
            <li>Left ventricular dysfunction</li>
            <li>Post-myocardial infarction management</li>
            <li>Selected patients with chronic kidney disease and albuminuria</li>
          </ul>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Dry cough</li>
            <li>Hyperkalemia</li>
            <li>Hypotension</li>
            <li>Acute deterioration of renal function in susceptible patients</li>
            <li>Angioedema</li>
          </ul>

          <p>
            ACE inhibitors are contraindicated during pregnancy and should be avoided in
            patients with a history of ACE-inhibitor-associated angioedema.
          </p>

          <h3>4. Angiotensin II Receptor Blockers</h3>

          <p>
            Angiotensin II receptor blockers (ARBs) selectively block the angiotensin II
            AT<sub>1</sub> receptor.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Losartan</li>
            <li>Valsartan</li>
            <li>Candesartan</li>
            <li>Irbesartan</li>
            <li>Telmisartan</li>
            <li>Olmesartan</li>
          </ul>

          <p>
            ARBs reduce angiotensin II-mediated vasoconstriction and aldosterone secretion.
            Unlike ACE inhibitors, they do not directly inhibit bradykinin breakdown and
            therefore produce cough less frequently.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Hyperkalemia</li>
            <li>Hypotension</li>
            <li>Renal function deterioration in susceptible patients</li>
          </ul>

          <p>
            ARBs should not be used during pregnancy.
          </p>

          <h3>5. Angiotensin Receptor-Neprilysin Inhibitor</h3>

          <p>
            Sacubitril/valsartan combines a neprilysin inhibitor with an ARB.
          </p>

          <p>
            Sacubitril increases concentrations of endogenous natriuretic peptides by inhibiting
            neprilysin, while valsartan blocks AT<sub>1</sub> receptors.
          </p>

          <p>
            The combined effects promote vasodilation, natriuresis, reduced filling pressures,
            and suppression of maladaptive neurohormonal signaling.
          </p>

          <p>
            Sacubitril/valsartan is particularly important in selected patients with chronic
            heart failure with reduced ejection fraction.
          </p>

          <h3>6. Calcium-Channel Blockers</h3>

          <p>
            Calcium-channel blockers inhibit L-type calcium channels. Their effects depend on
            whether they predominantly affect vascular smooth muscle or cardiac tissue.
          </p>

          <h4>Dihydropyridines</h4>

          <ul>
            <li>Amlodipine</li>
            <li>Nifedipine</li>
            <li>Felodipine</li>
            <li>Nicardipine</li>
          </ul>

          <p>
            Dihydropyridines primarily produce arterial vasodilation and reduce systemic
            vascular resistance.
          </p>

          <h4>Non-Dihydropyridines</h4>

          <ul>
            <li>Verapamil</li>
            <li>Diltiazem</li>
          </ul>

          <p>
            Verapamil and diltiazem have significant effects on the sinoatrial and
            atrioventricular nodes and can reduce heart rate and AV conduction.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Peripheral edema</li>
            <li>Flushing</li>
            <li>Headache</li>
            <li>Hypotension</li>
            <li>Bradycardia with non-dihydropyridines</li>
            <li>AV conduction abnormalities</li>
            <li>Constipation, particularly with verapamil</li>
          </ul>

          <h3>7. Beta-Adrenergic Blockers</h3>

          <p>
            Beta blockers antagonize beta-adrenergic receptors and reduce the effects of
            sympathetic stimulation on the heart.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Metoprolol</li>
            <li>Bisoprolol</li>
            <li>Carvedilol</li>
            <li>Atenolol</li>
            <li>Propranolol</li>
            <li>Nebivolol</li>
          </ul>

          <h4>Cardiac Effects</h4>

          <ul>
            <li>Reduced heart rate</li>
            <li>Reduced myocardial contractility</li>
            <li>Reduced AV conduction</li>
            <li>Reduced myocardial oxygen demand</li>
            <li>Reduced renin release from the kidney</li>
          </ul>

          <p>
            Selected beta blockers improve survival in appropriate patients with chronic
            heart failure with reduced ejection fraction.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Bradycardia</li>
            <li>Hypotension</li>
            <li>Fatigue</li>
            <li>AV block</li>
            <li>Sexual dysfunction in some patients</li>
            <li>Bronchospasm with nonselective agents</li>
            <li>Masking of some manifestations of hypoglycemia</li>
          </ul>

          <h3>8. Thiazide and Thiazide-Like Diuretics</h3>

          <p>
            Thiazide diuretics inhibit the sodium-chloride cotransporter in the distal
            convoluted tubule.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Hydrochlorothiazide</li>
            <li>Chlorthalidone</li>
            <li>Indapamide</li>
          </ul>

          <p>
            They increase urinary sodium and water excretion and are important first-line
            agents for many patients with hypertension.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Hyponatremia</li>
            <li>Hypokalemia</li>
            <li>Hypomagnesemia</li>
            <li>Hyperuricemia</li>
            <li>Hyperglycemia</li>
            <li>Volume depletion</li>
          </ul>

          <h3>9. Loop Diuretics</h3>

          <p>
            Loop diuretics inhibit the Na<sup>+</sup>-K<sup>+</sup>-2Cl<sup>−</sup>
            cotransporter in the thick ascending limb of the loop of Henle.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Furosemide</li>
            <li>Bumetanide</li>
            <li>Torsemide</li>
          </ul>

          <p>
            They produce potent natriuresis and diuresis and are particularly important for
            relieving congestion in heart failure.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Hypokalemia</li>
            <li>Hyponatremia</li>
            <li>Hypomagnesemia</li>
            <li>Volume depletion</li>
            <li>Hypotension</li>
            <li>Hyperuricemia</li>
            <li>Ototoxicity at high exposures or with susceptible patients</li>
          </ul>

          <h3>10. Mineralocorticoid Receptor Antagonists</h3>

          <p>
            Mineralocorticoid receptor antagonists block aldosterone-mediated sodium retention
            and potassium excretion in the distal nephron.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Spironolactone</li>
            <li>Eplerenone</li>
          </ul>

          <p>
            They reduce sodium retention, limit pathological cardiac remodeling, and have an
            important role in selected patients with heart failure and hypertension.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Hyperkalemia</li>
            <li>Renal function deterioration</li>
            <li>Gynecomastia with spironolactone</li>
            <li>Menstrual disturbances with spironolactone</li>
          </ul>

          <h3>11. Alpha-Adrenergic Blockers</h3>

          <p>
            Alpha-1 blockers produce vasodilation by blocking alpha-1 adrenergic receptors
            on vascular smooth muscle.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Prazosin</li>
            <li>Doxazosin</li>
            <li>Terazosin</li>
          </ul>

          <p>
            They are generally not preferred as initial monotherapy for uncomplicated hypertension
            but can be useful in selected patients, particularly those with concomitant
            benign prostatic hyperplasia.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Postural hypotension</li>
            <li>Dizziness</li>
            <li>Syncope</li>
            <li>Reflex tachycardia</li>
          </ul>

          <h3>12. Central Sympatholytic Drugs</h3>

          <p>
            Central sympatholytic agents reduce sympathetic outflow from the central nervous system.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Clonidine</li>
            <li>Methyldopa</li>
          </ul>

          <p>
            Methyldopa has a particular role in hypertension during pregnancy in appropriate
            clinical settings.
          </p>

          <h3>13. Direct Vasodilators</h3>

          <p>
            Direct vasodilators relax vascular smooth muscle and reduce vascular resistance.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Hydralazine</li>
            <li>Minoxidil</li>
            <li>Sodium nitroprusside</li>
          </ul>

          <p>
            Hydralazine predominantly reduces arterial resistance. Minoxidil is a powerful
            arterial vasodilator generally reserved for resistant hypertension.
          </p>

          <h3>14. Heart Failure Pharmacology</h3>

          <p>
            Pharmacological treatment of heart failure aims to reduce symptoms, relieve congestion,
            suppress maladaptive neurohormonal activation, reduce hospitalization, and improve
            survival where evidence supports these outcomes.
          </p>

          <h3>15. Four Major Drug Groups in HFrEF</h3>

          <p>
            Contemporary guideline-directed medical therapy for heart failure with reduced ejection
            fraction includes four major pharmacological pillars:
          </p>

          <ul>
            <li>ARNI or ACE inhibitor/ARB</li>
            <li>Evidence-based beta blocker</li>
            <li>Mineralocorticoid receptor antagonist</li>
            <li>SGLT2 inhibitor</li>
          </ul>

          <h3>16. SGLT2 Inhibitors</h3>

          <p>
            Sodium-glucose cotransporter 2 inhibitors reduce renal glucose and sodium reabsorption
            in the proximal tubule.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Dapagliflozin</li>
            <li>Empagliflozin</li>
          </ul>

          <p>
            Their cardiovascular effects extend beyond glucose lowering and include natriuresis,
            changes in renal hemodynamics, and beneficial effects on heart failure outcomes.
          </p>

          <p>
            SGLT2 inhibitors are used in appropriate patients with heart failure, including
            patients without diabetes.
          </p>

          <h4>Important Adverse Effects</h4>

          <ul>
            <li>Genital mycotic infections</li>
            <li>Volume depletion in susceptible patients</li>
            <li>Rare euglycemic diabetic ketoacidosis</li>
            <li>Temporary changes in renal function after initiation</li>
          </ul>

          <h3>17. Diuretics in Heart Failure</h3>

          <p>
            Diuretics reduce extracellular fluid volume and venous congestion.
            Loop diuretics are particularly useful for symptomatic relief in patients with
            fluid overload.
          </p>

          <p>
            Diuretics primarily improve symptoms and congestion; their effects on long-term
            survival depend on the specific drug and clinical context.
          </p>

          <h3>18. Digoxin</h3>

          <p>
            Digoxin is a cardiac glycoside that inhibits the Na<sup>+</sup>/K<sup>+</sup>-ATPase
            pump.
          </p>

          <p>
            Inhibition of the sodium-potassium pump increases intracellular sodium.
            This reduces the driving force for the sodium-calcium exchanger, resulting in
            increased intracellular calcium availability for contraction.
          </p>

          <p>
            Digoxin therefore produces a positive inotropic effect.
          </p>

          <p>
            It also increases vagal activity and can slow AV nodal conduction.
          </p>

          <h4>Clinical Uses</h4>

          <ul>
            <li>Selected patients with symptomatic heart failure</li>
            <li>Selected patients requiring ventricular rate control in atrial fibrillation</li>
          </ul>

          <h4>Toxicity</h4>

          <ul>
            <li>Nausea and vomiting</li>
            <li>Visual disturbances</li>
            <li>Confusion</li>
            <li>Bradyarrhythmias</li>
            <li>Atrial and ventricular arrhythmias</li>
          </ul>

          <p>
            Hypokalemia can increase susceptibility to digoxin toxicity.
          </p>

          <h3>19. Ivabradine</h3>

          <p>
            Ivabradine selectively inhibits the funny current (I<sub>f</sub>) in the sinoatrial
            node and reduces heart rate without directly producing the negative inotropic effects
            associated with beta blockade.
          </p>

          <p>
            It is used in selected patients with chronic heart failure and elevated sinus heart
            rate despite appropriate therapy.
          </p>

          <h3>20. Vasodilators in Heart Failure</h3>

          <p>
            Vasodilators reduce cardiac filling pressures and/or systemic vascular resistance.
          </p>

          <h4>Venodilators</h4>

          <p>
            Venodilation reduces venous return and therefore reduces preload.
          </p>

          <h4>Arteriolar Vasodilators</h4>

          <p>
            Arteriolar dilation reduces systemic vascular resistance and therefore reduces afterload.
          </p>

          <h3>21. Nitrates</h3>

          <p>
            Organic nitrates increase nitric oxide signaling and activate soluble guanylyl cyclase,
            resulting in increased cyclic GMP and vascular smooth muscle relaxation.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Nitroglycerin</li>
            <li>Isosorbide dinitrate</li>
            <li>Isosorbide mononitrate</li>
          </ul>

          <p>
            Nitrates predominantly produce venodilation at usual doses and reduce preload.
            At higher concentrations they can also produce arterial dilation.
          </p>

          <h4>Clinical Uses</h4>

          <ul>
            <li>Angina</li>
            <li>Acute coronary syndromes in selected patients</li>
            <li>Acute pulmonary edema in selected settings</li>
          </ul>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Headache</li>
            <li>Flushing</li>
            <li>Hypotension</li>
            <li>Reflex tachycardia</li>
            <li>Tolerance with continuous exposure</li>
          </ul>

          <p>
            Nitrates should not be combined with phosphodiesterase-5 inhibitors because of the
            potential for severe hypotension.
          </p>

          <h3>22. Antianginal Pharmacology</h3>

          <p>
            Antianginal drugs reduce myocardial ischemia by decreasing oxygen demand, increasing
            coronary blood flow, or improving the balance between myocardial oxygen supply and demand.
          </p>

          <ul>
            <li>Nitrates</li>
            <li>Beta blockers</li>
            <li>Calcium-channel blockers</li>
            <li>Ranolazine</li>
            <li>Other selected antianginal agents</li>
          </ul>

          <h3>23. Beta Blockers in Angina</h3>

          <p>
            Beta blockers reduce heart rate, contractility, and blood pressure, thereby decreasing
            myocardial oxygen consumption.
          </p>

          <p>
            Their effect is particularly useful in exertional angina because they reduce the
            increase in cardiac workload associated with exercise.
          </p>

          <h3>24. Ranolazine</h3>

          <p>
            Ranolazine is an antianginal drug that reduces pathological late sodium current in
            cardiomyocytes.
          </p>

          <p>
            Reduction of intracellular sodium can decrease secondary intracellular calcium overload
            and improve myocardial relaxation and wall tension.
          </p>

          <p>
            Ranolazine generally has less effect on heart rate and blood pressure than many other
            antianginal drugs.
          </p>

          <h3>25. Antiarrhythmic Drugs</h3>

          <p>
            Antiarrhythmic drugs modify cardiac automaticity, conduction velocity, refractoriness,
            or repolarization.
          </p>

          <p>
            The traditional Vaughan-Williams classification includes:
          </p>

          <ul>
            <li>Class I — sodium-channel blockers</li>
            <li>Class II — beta blockers</li>
            <li>Class III — potassium-channel blockers</li>
            <li>Class IV — calcium-channel blockers</li>
            <li>Other agents with antiarrhythmic activity</li>
          </ul>

          <h3>26. Class I Antiarrhythmics</h3>

          <p>
            Class I drugs block fast sodium channels and reduce the rate of phase 0 depolarization
            in fast-response cardiac tissue.
          </p>

          <h4>Class IA</h4>

          <ul>
            <li>Quinidine</li>
            <li>Procainamide</li>
            <li>Disopyramide</li>
          </ul>

          <p>
            These agents block sodium channels and also prolong repolarization to varying degrees.
          </p>

          <h4>Class IB</h4>

          <ul>
            <li>Lidocaine</li>
            <li>Mexiletine</li>
          </ul>

          <p>
            Class IB agents preferentially affect ischemic or depolarized ventricular tissue
            and generally have limited effects on normal atrial tissue.
          </p>

          <h4>Class IC</h4>

          <ul>
            <li>Flecainide</li>
            <li>Propafenone</li>
          </ul>

          <p>
            Class IC drugs produce strong sodium-channel blockade and substantially slow conduction.
          </p>

          <p>
            They are generally avoided in patients with significant structural heart disease
            because of proarrhythmic risk.
          </p>

          <h3>27. Class II Antiarrhythmics</h3>

          <p>
            Class II agents are beta-adrenergic blockers.
          </p>

          <p>
            They reduce sympathetic effects on the heart, decrease sinoatrial node activity,
            slow AV nodal conduction, and prolong AV nodal refractoriness.
          </p>

          <p>
            Examples include metoprolol, esmolol, propranolol, and others.
          </p>

          <h3>28. Class III Antiarrhythmics</h3>

          <p>
            Class III drugs predominantly block potassium currents involved in cardiac repolarization,
            thereby prolonging action potential duration and refractoriness.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Amiodarone</li>
            <li>Sotalol</li>
            <li>Dofetilide</li>
            <li>Ibutilide</li>
          </ul>

          <h4>Amiodarone</h4>

          <p>
            Amiodarone has effects on potassium, sodium, and calcium channels as well as
            beta-adrenergic receptors. It therefore has properties spanning multiple
            Vaughan-Williams classes.
          </p>

          <h4>Important Adverse Effects of Amiodarone</h4>

          <ul>
            <li>Pulmonary toxicity</li>
            <li>Thyroid dysfunction</li>
            <li>Hepatotoxicity</li>
            <li>Corneal deposits</li>
            <li>Optic neuropathy</li>
            <li>Skin photosensitivity</li>
            <li>QT prolongation</li>
            <li>Bradycardia</li>
          </ul>

          <h3>29. Class IV Antiarrhythmics</h3>

          <p>
            Verapamil and diltiazem inhibit L-type calcium channels and reduce conduction
            through the AV node.
          </p>

          <p>
            They are useful in selected supraventricular tachyarrhythmias and for ventricular
            rate control in selected patients with atrial fibrillation or atrial flutter.
          </p>

          <h3>30. Adenosine</h3>

          <p>
            Adenosine is a very short-acting antiarrhythmic drug that transiently slows or
            blocks AV nodal conduction.
          </p>

          <p>
            It is commonly used for acute termination of certain re-entrant supraventricular
            tachycardias involving the AV node.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Flushing</li>
            <li>Chest discomfort</li>
            <li>Dyspnea</li>
            <li>Transient AV block</li>
            <li>Transient bronchospasm in susceptible patients</li>
          </ul>

          <h3>31. Atropine</h3>

          <p>
            Atropine is a muscarinic receptor antagonist that reduces parasympathetic effects
            on the sinoatrial and atrioventricular nodes.
          </p>

          <p>
            It can increase heart rate and improve AV nodal conduction and is used in selected
            patients with symptomatic bradycardia.
          </p>

          <h3>32. Antiplatelet Drugs</h3>

          <p>
            Antiplatelet drugs inhibit platelet activation or aggregation and are essential in
            the prevention and treatment of arterial thrombotic disease.
          </p>

          <ul>
            <li>Aspirin</li>
            <li>Clopidogrel</li>
            <li>Prasugrel</li>
            <li>Ticagrelor</li>
            <li>Cangrelor</li>
            <li>Glycoprotein IIb/IIIa inhibitors</li>
          </ul>

          <h3>33. Aspirin</h3>

          <p>
            Aspirin irreversibly acetylates cyclooxygenase enzymes, particularly platelet COX-1,
            reducing production of thromboxane A<sub>2</sub>.
          </p>

          <p>
            Reduced thromboxane A<sub>2</sub> decreases platelet activation and aggregation.
          </p>

          <p>
            Because platelets cannot synthesize new cyclooxygenase efficiently, the antiplatelet
            effect persists for the lifespan of the affected platelet.
          </p>

          <h4>Clinical Uses</h4>

          <ul>
            <li>Acute coronary syndromes</li>
            <li>Secondary prevention of atherosclerotic cardiovascular disease</li>
            <li>Selected post-intervention antiplatelet regimens</li>
          </ul>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Gastrointestinal irritation</li>
            <li>Gastrointestinal bleeding</li>
            <li>Hemorrhage</li>
            <li>Hypersensitivity reactions</li>
            <li>Bronchospasm in susceptible patients</li>
          </ul>

          <h3>34. P2Y12 Receptor Inhibitors</h3>

          <p>
            P2Y12 inhibitors block the platelet ADP receptor and reduce platelet activation
            and aggregation.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Clopidogrel</li>
            <li>Prasugrel</li>
            <li>Ticagrelor</li>
            <li>Cangrelor</li>
          </ul>

          <p>
            These agents are important components of dual antiplatelet therapy in selected
            patients with acute coronary syndrome and after coronary intervention.
          </p>

          <h3>35. Glycoprotein IIb/IIIa Inhibitors</h3>

          <p>
            Glycoprotein IIb/IIIa inhibitors block the final common pathway of platelet aggregation
            by preventing fibrinogen-mediated platelet cross-linking.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Abciximab</li>
            <li>Eptifibatide</li>
            <li>Tirofiban</li>
          </ul>

          <h3>36. Anticoagulants</h3>

          <p>
            Anticoagulants inhibit the coagulation cascade and reduce formation or propagation
            of fibrin-rich thrombi.
          </p>

          <ul>
            <li>Unfractionated heparin</li>
            <li>Low-molecular-weight heparins</li>
            <li>Warfarin</li>
            <li>Direct thrombin inhibitors</li>
            <li>Direct factor Xa inhibitors</li>
          </ul>

          <h3>37. Unfractionated Heparin</h3>

          <p>
            Unfractionated heparin binds to antithrombin and markedly accelerates inhibition
            of thrombin and factor Xa.
          </p>

          <p>
            It has a rapid onset of action when administered parenterally and can be reversed
            with protamine in appropriate circumstances.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Bleeding</li>
            <li>Heparin-induced thrombocytopenia</li>
            <li>Osteoporosis with prolonged exposure</li>
          </ul>

          <h3>38. Low-Molecular-Weight Heparins</h3>

          <p>
            Low-molecular-weight heparins, such as enoxaparin, predominantly enhance antithrombin
            inhibition of factor Xa.
          </p>

          <p>
            They have more predictable pharmacokinetics than unfractionated heparin but require
            caution in significant renal impairment.
          </p>

          <h3>39. Warfarin</h3>

          <p>
            Warfarin inhibits vitamin K epoxide reductase and thereby reduces regeneration of
            active vitamin K required for synthesis of several coagulation factors.
          </p>

          <p>
            It reduces synthesis of factors II, VII, IX, and X as well as proteins C and S.
          </p>

          <p>
            Its anticoagulant effect is monitored using the international normalized ratio (INR).
          </p>

          <h4>Important Considerations</h4>

          <ul>
            <li>Numerous drug interactions</li>
            <li>Food-related vitamin K interactions</li>
            <li>Bleeding risk</li>
            <li>Requires laboratory monitoring</li>
            <li>Contraindicated during pregnancy in many circumstances</li>
          </ul>

          <h3>40. Direct Oral Anticoagulants</h3>

          <p>
            Direct oral anticoagulants (DOACs) directly inhibit specific coagulation factors.
          </p>

          <h4>Factor Xa Inhibitors</h4>

          <ul>
            <li>Apixaban</li>
            <li>Rivaroxaban</li>
            <li>Edoxaban</li>
          </ul>

          <h4>Direct Thrombin Inhibitor</h4>

          <ul>
            <li>Dabigatran</li>
          </ul>

          <p>
            DOACs are widely used for prevention of stroke and systemic embolism in appropriate
            patients with non-valvular atrial fibrillation and for treatment or prevention of
            venous thromboembolism.
          </p>

          <h3>41. Thrombolytic Drugs</h3>

          <p>
            Thrombolytic or fibrinolytic drugs promote conversion of plasminogen to plasmin,
            which degrades fibrin within thrombi.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Alteplase</li>
            <li>Tenecteplase</li>
            <li>Reteplase</li>
            <li>Streptokinase</li>
          </ul>

          <p>
            Fibrinolytic therapy may be used in selected acute thrombotic emergencies when
            appropriate reperfusion strategies are indicated and the benefits outweigh the
            substantial bleeding risk.
          </p>

          <h3>42. Lipid-Lowering Drugs</h3>

          <p>
            Lipid-lowering therapy reduces circulating atherogenic lipoproteins and lowers
            cardiovascular risk.
          </p>

          <ul>
            <li>Statins</li>
            <li>Ezetimibe</li>
            <li>PCSK9 inhibitors</li>
            <li>Bempedoic acid</li>
            <li>Bile acid sequestrants</li>
            <li>Fibrates</li>
            <li>Prescription omega-3-based therapies in selected settings</li>
          </ul>

          <h3>43. Statins</h3>

          <p>
            Statins inhibit HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol
            synthesis.
          </p>

          <p>
            Reduced hepatic cholesterol synthesis increases hepatic LDL receptor expression,
            thereby increasing clearance of LDL particles from the circulation.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Atorvastatin</li>
            <li>Rosuvastatin</li>
            <li>Simvastatin</li>
            <li>Pravastatin</li>
            <li>Fluvastatin</li>
          </ul>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Myalgia</li>
            <li>Myopathy</li>
            <li>Rare rhabdomyolysis</li>
            <li>Elevation of liver enzymes</li>
          </ul>

          <h3>44. Ezetimibe</h3>

          <p>
            Ezetimibe inhibits intestinal cholesterol absorption by blocking the NPC1L1
            cholesterol transporter at the intestinal brush border.
          </p>

          <p>
            It can be used alone or in combination with statin therapy when additional LDL
            reduction is required.
          </p>

          <h3>45. PCSK9 Inhibitors</h3>

          <p>
            PCSK9-targeting therapies increase hepatic LDL receptor availability and enhance
            clearance of LDL cholesterol from the circulation.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Evolocumab</li>
            <li>Alirocumab</li>
          </ul>

          <h3>46. Bempedoic Acid</h3>

          <p>
            Bempedoic acid inhibits ATP citrate lyase in the cholesterol synthesis pathway.
            It reduces hepatic cholesterol synthesis and increases LDL receptor-mediated
            clearance of LDL particles.
          </p>

          <h3>47. Fibrates</h3>

          <p>
            Fibrates activate peroxisome proliferator-activated receptor-alpha (PPAR-α),
            altering lipid metabolism and increasing triglyceride-rich lipoprotein clearance.
          </p>

          <h4>Examples</h4>

          <ul>
            <li>Fenofibrate</li>
            <li>Gemfibrozil</li>
          </ul>

          <p>
            They are particularly useful for selected patients with severe hypertriglyceridemia.
          </p>

          <h3>48. Positive Inotropic Drugs</h3>

          <p>
            Positive inotropic agents increase myocardial contractility.
          </p>

          <p>
            Important examples include:
          </p>

          <ul>
            <li>Dobutamine</li>
            <li>Milrinone</li>
            <li>Digoxin</li>
          </ul>

          <h3>49. Dobutamine</h3>

          <p>
            Dobutamine is predominantly a beta<sub>1</sub>-adrenergic agonist that increases
            myocardial contractility and cardiac output.
          </p>

          <p>
            It is administered intravenously and is used in selected acute settings involving
            severe low-output states.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Tachycardia</li>
            <li>Arrhythmias</li>
            <li>Increased myocardial oxygen demand</li>
            <li>Hypotension or hypertension depending on dose and clinical state</li>
          </ul>

          <h3>50. Milrinone</h3>

          <p>
            Milrinone inhibits phosphodiesterase type 3 (PDE3), increasing intracellular
            cyclic AMP in cardiac myocytes and vascular smooth muscle.
          </p>

          <p>
            In the myocardium, increased cAMP produces positive inotropy. In vascular smooth
            muscle, it produces vasodilation.
          </p>

          <p>
            It is therefore described as an inodilator.
          </p>

          <h4>Adverse Effects</h4>

          <ul>
            <li>Hypotension</li>
            <li>Ventricular arrhythmias</li>
            <li>Headache</li>
          </ul>

          <h3>51. Vasopressors in Cardiogenic Shock</h3>

          <p>
            Vasopressors increase vascular tone and arterial pressure in selected patients
            with severe hypotension and shock.
          </p>

          <h4>Norepinephrine</h4>

          <p>
            Norepinephrine predominantly stimulates alpha-1 adrenergic receptors with additional
            beta-1 activity, increasing vascular tone and supporting arterial pressure.
          </p>

          <p>
            It is commonly preferred as a vasopressor in many forms of severe shock when
            vasopressor support is required.
          </p>

          <h4>Epinephrine</h4>

          <p>
            Epinephrine stimulates alpha and beta adrenergic receptors and has major roles in
            cardiac arrest, anaphylaxis, and selected shock states.
          </p>

          <h3>52. Drugs Affecting the Renin-Angiotensin-Aldosterone System</h3>

          <p>
            The renin-angiotensin-aldosterone system is a major regulator of blood pressure,
            vascular resistance, sodium balance, and cardiac remodeling.
          </p>

          <p>
            Important pharmacological targets include:
          </p>

          <ul>
            <li>Renin</li>
            <li>ACE</li>
            <li>AT<sub>1</sub> receptors</li>
            <li>Mineralocorticoid receptors</li>
            <li>Neprilysin</li>
          </ul>

          <h3>53. Cardiovascular Drug Effects on Preload</h3>

          <p>
            Preload refers broadly to ventricular filling and myocardial fiber stretch before
            contraction.
          </p>

          <p>
            Drugs that can reduce preload include:
          </p>

          <ul>
            <li>Diuretics</li>
            <li>Nitrates</li>
            <li>Other venodilators</li>
          </ul>

          <h3>54. Cardiovascular Drug Effects on Afterload</h3>

          <p>
            Afterload represents the load against which the ventricle ejects blood.
          </p>

          <p>
            Drugs that reduce afterload include:
          </p>

          <ul>
            <li>ACE inhibitors</li>
            <li>ARBs</li>
            <li>ARNIs</li>
            <li>Calcium-channel blockers</li>
            <li>Direct vasodilators</li>
          </ul>

          <h3>55. Drugs Affecting Heart Rate</h3>

          <p>
            Heart rate can be pharmacologically increased or decreased depending on the clinical
            problem.
          </p>

          <h4>Drugs That Reduce Heart Rate</h4>

          <ul>
            <li>Beta blockers</li>
            <li>Verapamil</li>
            <li>Diltiazem</li>
            <li>Ivabradine</li>
            <li>Digoxin</li>
          </ul>

          <h4>Drugs That Increase Heart Rate</h4>

          <ul>
            <li>Atropine</li>
            <li>Beta-adrenergic agonists</li>
            <li>Epinephrine</li>
          </ul>

          <h3>56. Drugs Affecting Contractility</h3>

          <h4>Positive Inotropes</h4>

          <ul>
            <li>Dobutamine</li>
            <li>Milrinone</li>
            <li>Digoxin</li>
          </ul>

          <h4>Negative Inotropes</h4>

          <ul>
            <li>Beta blockers</li>
            <li>Verapamil</li>
            <li>Diltiazem</li>
          </ul>

          <h3>57. Important Drug Interactions</h3>

          <p>
            Cardiovascular medications frequently interact because many affect blood pressure,
            renal function, electrolyte balance, cardiac conduction, or coagulation.
          </p>

          <ul>
            <li>
              ACE inhibitors or ARBs combined with potassium-retaining drugs can increase the
              risk of hyperkalemia.
            </li>
            <li>
              ACE inhibitors should not be combined with sacubitril/valsartan without an
              appropriate washout period because of angioedema risk.
            </li>
            <li>
              Nitrates combined with PDE-5 inhibitors can cause profound hypotension.
            </li>
            <li>
              Multiple AV nodal blocking agents can produce excessive bradycardia or AV block.
            </li>
            <li>
              Diuretics can alter potassium and magnesium concentrations and thereby influence
              arrhythmia risk.
            </li>
            <li>
              Warfarin has numerous drug and dietary interactions.
            </li>
            <li>
              Anticoagulants combined with antiplatelet drugs increase bleeding risk.
            </li>
            <li>
              Digoxin toxicity is influenced by renal function and electrolyte abnormalities.
            </li>
          </ul>

          <h3>58. Pharmacological Management of Acute Myocardial Infarction</h3>

          <p>
            Management of acute myocardial infarction aims to restore coronary perfusion,
            prevent further thrombosis, limit myocardial injury, control symptoms, and reduce
            subsequent cardiovascular events.
          </p>

          <p>
            Depending on the clinical setting, pharmacological therapy may include:
          </p>

          <ul>
            <li>Aspirin</li>
            <li>P2Y12 inhibitor</li>
            <li>Anticoagulation</li>
            <li>High-intensity statin therapy</li>
            <li>Nitrates in appropriate patients</li>
            <li>Beta blockers in selected patients</li>
            <li>ACE inhibitor or ARB in appropriate patients</li>
            <li>Other therapy based on complications and hemodynamic status</li>
          </ul>

          <h3>59. Pharmacological Management of Atrial Fibrillation</h3>

          <p>
            Pharmacological treatment of atrial fibrillation addresses several separate goals:
            ventricular rate control, rhythm control in selected patients, and prevention of
            thromboembolic stroke.
          </p>

          <h4>Rate Control</h4>

          <ul>
            <li>Beta blockers</li>
            <li>Diltiazem</li>
            <li>Verapamil</li>
            <li>Digoxin in selected patients</li>
          </ul>

          <h4>Rhythm Control</h4>

          <ul>
            <li>Amiodarone</li>
            <li>Flecainide in selected patients</li>
            <li>Propafenone in selected patients</li>
            <li>Sotalol</li>
            <li>Dofetilide</li>
          </ul>

          <h4>Stroke Prevention</h4>

          <ul>
            <li>Direct oral anticoagulants</li>
            <li>Warfarin in selected patients</li>
          </ul>

          <h3>60. Pharmacology of Electrolyte-Related Arrhythmias</h3>

          <p>
            Electrolyte disturbances can profoundly affect cardiac electrophysiology.
          </p>

          <h4>Hypokalemia</h4>

          <p>
            Low potassium can increase susceptibility to certain ventricular arrhythmias,
            particularly in patients receiving QT-prolonging drugs.
          </p>

          <h4>Hyperkalemia</h4>

          <p>
            Severe hyperkalemia can impair cardiac conduction and produce life-threatening
            arrhythmias.
          </p>

          <p>
            Emergency treatment may involve membrane stabilization with intravenous calcium
            and therapies that temporarily shift potassium intracellularly, followed by
            definitive potassium removal when required.
          </p>

          <h3>61. Pharmacology of Cardiogenic Shock</h3>

          <p>
            Cardiogenic shock results from severe cardiac dysfunction causing inadequate
            tissue perfusion.
          </p>

          <p>
            Treatment may involve:
          </p>

          <ul>
            <li>Correction of the underlying cause</li>
            <li>Revascularization when appropriate</li>
            <li>Carefully selected vasopressors</li>
            <li>Inotropes in selected patients</li>
            <li>Management of fluid status</li>
            <li>Mechanical circulatory support in selected severe cases</li>
          </ul>

          <h3>62. Pharmacology of Hypertensive Emergencies</h3>

          <p>
            Hypertensive emergencies involve severe blood pressure elevation accompanied by
            acute target-organ injury.
          </p>

          <p>
            Intravenous medications may be required to achieve controlled blood pressure
            reduction while avoiding excessive or precipitous reduction in organ perfusion.
          </p>

          <h4>Examples of Intravenous Agents</h4>

          <ul>
            <li>Nicardipine</li>
            <li>Clevidipine</li>
            <li>Labetalol</li>
            <li>Nitroglycerin in selected settings</li>
            <li>Sodium nitroprusside in selected settings</li>
          </ul>

          <h3>63. Sodium Nitroprusside</h3>

          <p>
            Sodium nitroprusside releases nitric oxide and produces potent arterial and venous
            vasodilation.
          </p>

          <p>
            It rapidly reduces preload and afterload and is administered intravenously in
            carefully monitored clinical situations.
          </p>

          <p>
            Prolonged or excessive exposure can produce cyanide or thiocyanate toxicity,
            particularly in susceptible patients.
          </p>

          <h3>64. Cardiovascular Pharmacology and Renal Function</h3>

          <p>
            The kidney is closely linked to cardiovascular pharmacology because renal sodium
            handling, fluid balance, potassium homeostasis, and renin secretion strongly
            influence blood pressure and cardiac function.
          </p>

          <p>
            Many cardiovascular drugs require dose adjustment or careful monitoring in renal
            impairment.
          </p>

          <h3>65. Cardiovascular Pharmacology and Electrolytes</h3>

          <p>
            Potassium and magnesium are particularly important in cardiovascular pharmacology.
            Abnormal concentrations can alter cardiac membrane potential, conduction,
            repolarization, and susceptibility to arrhythmias.
          </p>

          <p>
            Diuretics are among the major cardiovascular drugs capable of producing clinically
            significant electrolyte abnormalities.
          </p>

          <h3>66. General Adverse Drug Reactions in Cardiovascular Pharmacology</h3>

          <ul>
            <li>Hypotension</li>
            <li>Hypertension</li>
            <li>Bradycardia</li>
            <li>Tachycardia</li>
            <li>Electrolyte disturbances</li>
            <li>Renal dysfunction</li>
            <li>Bleeding</li>
            <li>Arrhythmias</li>
            <li>Drug-induced heart failure exacerbation</li>
            <li>Hepatotoxicity</li>
            <li>Drug-induced electrolyte abnormalities</li>
            <li>Drug-specific endocrine or pulmonary toxicity</li>
          </ul>

          <h3>67. Major Pharmacological Principles</h3>

          <ul>
            <li>
              ACE inhibitors and ARBs reduce angiotensin II-mediated vasoconstriction and
              aldosterone effects.
            </li>
            <li>
              Beta blockers reduce sympathetic stimulation of the heart.
            </li>
            <li>
              Calcium-channel blockers reduce calcium entry into vascular smooth muscle and/or
              cardiac tissue depending on the drug.
            </li>
            <li>
              Diuretics reduce sodium and water retention.
            </li>
            <li>
              Nitrates increase nitric oxide signaling and produce vasodilation.
            </li>
            <li>
              Antiplatelet drugs inhibit platelet activation and aggregation.
            </li>
            <li>
              Anticoagulants inhibit the coagulation cascade.
            </li>
            <li>
              Thrombolytics promote fibrin degradation.
            </li>
            <li>
              Statins reduce hepatic cholesterol synthesis and increase LDL clearance.
            </li>
            <li>
              Antiarrhythmics modify cardiac ion channels or autonomic influences on
              cardiac electrical activity.
            </li>
            <li>
              Inotropes increase myocardial contractility but may increase arrhythmia risk
              and myocardial oxygen consumption.
            </li>
          </ul>

          <h3>68. Summary of Cardiovascular Pharmacology</h3>

          <p>
            Cardiovascular pharmacology is fundamentally based on modifying the determinants
            of cardiac output, vascular resistance, blood volume, cardiac electrical activity,
            myocardial oxygen demand, thrombosis, and lipid metabolism.
          </p>

          <p>
            Antihypertensive drugs reduce blood pressure through effects on vascular tone,
            cardiac activity, renal sodium handling, or neurohormonal signaling. Drugs used
            in heart failure target maladaptive neurohormonal pathways, reduce congestion,
            improve hemodynamics, and in selected cases improve survival.
          </p>

          <p>
            Antiarrhythmic drugs modify ion-channel activity, autonomic influences, automaticity,
            conduction, and refractoriness. Antiplatelet drugs and anticoagulants reduce
            thrombotic complications, while thrombolytic agents actively promote fibrin
            degradation in selected acute thrombotic emergencies.
          </p>

          <p>
            Lipid-lowering drugs, particularly statins and other LDL-lowering therapies,
            reduce atherosclerotic cardiovascular risk by decreasing circulating atherogenic
            lipoproteins. Nitrates and other antianginal agents improve the balance between
            myocardial oxygen supply and demand.
          </p>

          <p>
            The safe use of cardiovascular drugs requires consideration of renal function,
            hepatic function, electrolyte concentrations, blood pressure, heart rate,
            cardiac conduction, volume status, drug interactions, and the patient's underlying
            cardiovascular pathology.
          </p>
        `,
          histology: `
            <h2>Heart Histology</h2>

            <p>
              The heart is a specialized muscular organ composed of cardiac muscle, connective
              tissue, blood vessels, nerves, specialized conducting tissue, and epithelial or
              endothelial linings. Histologically, the wall of the heart is organized into three
              principal layers: the <strong>endocardium</strong>, <strong>myocardium</strong>,
              and <strong>epicardium</strong>.
            </p>

            <p>
              The myocardium is the principal functional layer and is composed predominantly of
              cardiac muscle cells (cardiomyocytes). These cells are highly specialized for
              continuous rhythmic contraction, electrical conduction, mechanical coupling,
              and aerobic energy production.
            </p>

            <h3>1. General Organization of the Heart Wall</h3>

            <p>
              From the lumen outward, the wall of the heart consists of:
            </p>

            <ol>
              <li>Endocardium</li>
              <li>Subendocardial connective tissue</li>
              <li>Myocardium</li>
              <li>Epicardium</li>
            </ol>

            <p>
              The epicardium is continuous with the visceral layer of the serous pericardium.
              The heart is therefore enclosed within a specialized serous membrane that permits
              relatively frictionless movement during cardiac contraction.
            </p>

            <h3>2. Cardiac Muscle</h3>

            <p>
              Cardiac muscle is a specialized form of striated muscle found almost exclusively
              in the myocardium. It shares the presence of sarcomeres and cross-striations with
              skeletal muscle but has distinctive structural and functional characteristics.
            </p>

            <p>
              Cardiac muscle cells are called <strong>cardiomyocytes</strong>. They are generally
              short, cylindrical or branching cells that connect with neighboring cells to form
              a three-dimensional functional network.
            </p>

            <h4>Major Characteristics of Cardiomyocytes</h4>

            <ul>
              <li>Striated cytoplasm</li>
              <li>Usually one centrally located nucleus</li>
              <li>Occasionally two nuclei</li>
              <li>Branching cellular architecture</li>
              <li>Abundant mitochondria</li>
              <li>Extensive sarcoplasmic reticulum</li>
              <li>Numerous myofilaments</li>
              <li>Intercalated discs</li>
              <li>High density of capillaries</li>
              <li>Rich aerobic metabolic machinery</li>
            </ul>

            <p>
              The extensive mitochondrial population reflects the heart's exceptionally high
              and continuous requirement for ATP. Unlike skeletal muscle, the myocardium normally
              cannot tolerate prolonged interruption of oxygen delivery.
            </p>

            <h3>3. Shape of Cardiomyocytes</h3>

            <p>
              Cardiomyocytes are shorter and more branched than typical skeletal muscle fibers.
              Individual cells are joined end-to-end and side-to-side, producing a highly
              interconnected network.
            </p>

            <p>
              The branching architecture contributes to mechanical integration of the myocardium
              and allows excitation to propagate efficiently throughout cardiac tissue.
            </p>

            <h3>4. Nucleus of Cardiomyocytes</h3>

            <p>
              Most working cardiomyocytes contain a single centrally located nucleus. Some cells,
              particularly in humans, may contain two nuclei.
            </p>

            <p>
              The central position of the nucleus helps distinguish cardiac muscle from skeletal
              muscle, in which nuclei are characteristically located at the periphery of the
              muscle fiber.
            </p>

            <h3>5. Sarcoplasm</h3>

            <p>
              The cytoplasm of cardiac muscle cells is called sarcoplasm. It contains abundant
              mitochondria, myofibrils, glycogen, lipid droplets, ribosomes, sarcoplasmic
              reticulum, and other organelles.
            </p>

            <p>
              The abundance of mitochondria reflects the myocardium's dependence on oxidative
              phosphorylation for ATP production.
            </p>

            <h3>6. Myofibrils</h3>

            <p>
              Myofibrils occupy a large proportion of the cardiomyocyte cytoplasm and contain
              repeating contractile units known as <strong>sarcomeres</strong>.
            </p>

            <p>
              Sarcomeres are composed primarily of:
            </p>

            <ul>
              <li>Actin-containing thin filaments</li>
              <li>Myosin-containing thick filaments</li>
              <li>Titin</li>
              <li>Associated regulatory proteins</li>
            </ul>

            <p>
              The organized arrangement of these proteins produces the characteristic microscopic
              cross-striations of cardiac muscle.
            </p>

            <h3>7. Cardiac Muscle Striations</h3>

            <p>
              Under the light microscope, cardiac muscle displays alternating dark and light
              bands caused by the organized arrangement of thick and thin myofilaments.
            </p>

            <p>
              The principal regions of a sarcomere include the A band, I band, H zone,
              M line, and Z discs.
            </p>

            <p>
              During contraction, actin slides toward the center of the sarcomere relative to
              myosin. The sarcomere therefore shortens without substantial shortening of the
              individual thick or thin filaments.
            </p>

            <h3>8. Sarcomeres</h3>

            <p>
              The sarcomere extends from one Z disc to the next. It represents the fundamental
              contractile unit of cardiac muscle.
            </p>

            <p>
              The interaction between actin and myosin is regulated by calcium-dependent
              interactions involving troponin and tropomyosin.
            </p>

            <h3>9. Mitochondria</h3>

            <p>
              Cardiac muscle contains an exceptionally high density of mitochondria. They are
              positioned between and around myofibrils, allowing efficient delivery of ATP to
              contractile and ion-transport systems.
            </p>

            <p>
              Mitochondrial oxidative phosphorylation supplies ATP for:
            </p>

            <ul>
              <li>Actin-myosin cross-bridge cycling</li>
              <li>Sarcoplasmic reticulum calcium uptake</li>
              <li>Plasma membrane ion pumps</li>
              <li>Maintenance of ionic gradients</li>
              <li>Cellular biosynthesis</li>
              <li>Cellular repair and maintenance</li>
            </ul>

            <h3>10. Sarcoplasmic Reticulum</h3>

            <p>
              The sarcoplasmic reticulum is a specialized intracellular membrane system involved
              in calcium storage and release.
            </p>

            <p>
              Calcium released from the sarcoplasmic reticulum binds to troponin C and initiates
              actin-myosin interaction.
            </p>

            <p>
              Calcium is subsequently transported back into the sarcoplasmic reticulum primarily
              through SERCA pumps, allowing relaxation.
            </p>

            <h3>11. Transverse Tubules</h3>

            <p>
              Transverse tubules, or <strong>T-tubules</strong>, are invaginations of the
              sarcolemma that extend into the cardiomyocyte.
            </p>

            <p>
              They allow the electrical signal at the cell surface to penetrate deeply into
              the cell and reach the contractile apparatus.
            </p>

            <p>
              Cardiac T-tubules are generally larger and located at the level of the Z discs,
              distinguishing them from the typical arrangement seen in skeletal muscle.
            </p>

            <h3>12. Dyads</h3>

            <p>
              In cardiac muscle, a T-tubule is closely associated with a single terminal
              cisterna of the sarcoplasmic reticulum, forming a structure called a
              <strong>dyad</strong>.
            </p>

            <p>
              This arrangement is important in excitation-contraction coupling.
            </p>

            <h3>13. Excitation-Contraction Coupling</h3>

            <p>
              Depolarization of the cardiomyocyte membrane travels along the sarcolemma and
              T-tubules. Voltage-dependent L-type calcium channels open and allow calcium to
              enter the cell.
            </p>

            <p>
              Incoming calcium stimulates additional calcium release from the sarcoplasmic
              reticulum through ryanodine receptors. This process is called
              <strong>calcium-induced calcium release</strong>.
            </p>

            <p>
              Increased cytoplasmic calcium binds to troponin C and permits actin-myosin
              interaction and contraction.
            </p>

            <h3>14. Intercalated Discs</h3>

            <p>
              Intercalated discs are specialized junctional complexes located at the boundaries
              between adjacent cardiomyocytes.
            </p>

            <p>
              They provide both mechanical attachment and electrical coupling between cells.
            </p>

            <p>
              Major components include:
            </p>

            <ul>
              <li>Desmosomes</li>
              <li>Fascia adherens</li>
              <li>Gap junctions</li>
            </ul>

            <h3>15. Fascia Adherens</h3>

            <p>
              Fascia adherens are specialized adherens junctions that anchor actin-containing
              thin filaments of terminal sarcomeres to the cell membrane.
            </p>

            <p>
              They transmit contractile force from one cardiomyocyte to the next and help maintain
              structural integrity during repeated contraction.
            </p>

            <h3>16. Desmosomes</h3>

            <p>
              Desmosomes provide strong mechanical adhesion between neighboring cardiomyocytes.
            </p>

            <p>
              They attach intermediate filament networks of adjacent cells and prevent separation
              of cardiac muscle cells during repeated mechanical stress.
            </p>

            <h3>17. Gap Junctions</h3>

            <p>
              Gap junctions provide low-resistance electrical communication between cardiomyocytes.
            </p>

            <p>
              They contain connexin proteins that form channels connecting the cytoplasm of
              adjacent cells.
            </p>

            <p>
              Ions can pass through these channels, allowing depolarization to spread from
              cell to cell.
            </p>

            <p>
              This electrical coupling contributes to the functional behavior of cardiac muscle
              as an electrically coordinated syncytium.
            </p>

            <h3>18. Functional Syncytium</h3>

            <p>
              Cardiac muscle is organized into two major functional syncytia: the atrial
              myocardium and ventricular myocardium.
            </p>

            <p>
              The fibrous skeleton of the heart electrically separates the atrial and ventricular
              muscle masses except through the specialized conduction system, particularly the
              atrioventricular bundle.
            </p>

            <h3>19. Endocardium</h3>

            <p>
              The endocardium is the innermost layer of the heart wall and lines the chambers
              and cardiac valves.
            </p>

            <p>
              It is composed primarily of a layer of endothelial cells supported by connective
              tissue.
            </p>

            <h3>20. Endothelial Lining</h3>

            <p>
              The surface of the endocardium is lined by simple squamous endothelial cells.
            </p>

            <p>
              These cells form a continuous non-thrombogenic interface between circulating blood
              and the underlying cardiac tissues.
            </p>

            <p>
              Endothelial cells also participate in regulation of vascular and hemostatic
              processes through signaling molecules, adhesion molecules, and mediators affecting
              platelet and leukocyte behavior.
            </p>

            <h3>21. Subendothelial Connective Tissue</h3>

            <p>
              Beneath the endothelial lining is a layer of connective tissue containing
              collagen, elastic fibers, fibroblasts, and other extracellular matrix components.
            </p>

            <p>
              Deeper portions of the endocardium may contain small blood vessels, nerves,
              and specialized conducting fibers.
            </p>

            <h3>22. Subendocardium</h3>

            <p>
              The subendocardial layer contains loose connective tissue and may contain
              components of the cardiac conduction system.
            </p>

            <p>
              Large modified cardiac muscle cells called <strong>Purkinje fibers</strong>
              are particularly prominent in the subendocardial region of the ventricles.
            </p>

            <h3>23. Purkinje Fibers</h3>

            <p>
              Purkinje fibers are specialized cardiac conducting cells responsible for rapidly
              distributing electrical impulses throughout the ventricular myocardium.
            </p>

            <p>
              Histologically, Purkinje cells are larger and paler than ordinary ventricular
              cardiomyocytes.
            </p>

            <p>
              Their pale appearance is related partly to abundant glycogen and a relatively
              reduced concentration of contractile myofibrils compared with working
              cardiomyocytes.
            </p>

            <h3>24. Myocardium</h3>

            <p>
              The myocardium is the middle and thickest layer of the cardiac wall. It consists
              predominantly of cardiac muscle cells embedded within a connective tissue framework.
            </p>

            <p>
              It generates the mechanical force required to eject blood from the cardiac chambers.
            </p>

            <p>
              The thickness of the myocardium varies between cardiac chambers according to
              their workload.
            </p>

            <h3>25. Atrial Myocardium</h3>

            <p>
              The atrial walls are thinner than the ventricular walls because the atria generate
              relatively low pressures when delivering blood into the ventricles.
            </p>

            <p>
              Atrial cardiomyocytes also contain specialized secretory granules containing
              natriuretic peptides, particularly atrial natriuretic peptide (ANP).
            </p>

            <h3>26. Ventricular Myocardium</h3>

            <p>
              The ventricular myocardium is substantially thicker than the atrial myocardium.
            </p>

            <p>
              The left ventricular myocardium is considerably thicker than the right ventricular
              myocardium because the left ventricle must generate the pressure required to
              propel blood through the systemic circulation.
            </p>

            <h3>27. Left Ventricular Histology</h3>

            <p>
              The left ventricle has a thick muscular wall composed of densely arranged
              cardiomyocytes and connective tissue.
            </p>

            <p>
              Its greater thickness reflects the high mechanical workload required to generate
              systemic arterial pressure.
            </p>

            <h3>28. Right Ventricular Histology</h3>

            <p>
              The right ventricular wall is thinner than the left ventricular wall because
              pulmonary circulation operates at substantially lower pressures.
            </p>

            <p>
              The myocardium remains highly vascularized and contains abundant mitochondria
              to support continuous contraction.
            </p>

            <h3>29. Cardiac Connective Tissue</h3>

            <p>
              Connective tissue is distributed throughout the myocardium and provides structural
              support for cardiomyocytes, blood vessels, nerves, and the conduction system.
            </p>

            <p>
              The extracellular matrix contains:
            </p>

            <ul>
              <li>Collagen fibers</li>
              <li>Elastic fibers</li>
              <li>Proteoglycans</li>
              <li>Glycoproteins</li>
              <li>Interstitial fluid</li>
            </ul>

            <h3>30. Cardiac Collagen</h3>

            <p>
              Collagen fibers provide tensile strength and contribute to the mechanical framework
              surrounding cardiomyocytes.
            </p>

            <p>
              Excessive collagen deposition can produce myocardial fibrosis, which can impair
              ventricular compliance and contribute to abnormal electrical conduction.
            </p>

            <h3>31. Cardiac Fibroblasts</h3>

            <p>
              Fibroblasts are important stromal cells within the myocardium. They synthesize
              and remodel extracellular matrix proteins.
            </p>

            <p>
              Fibroblast activation increases after myocardial injury and can contribute to
              scar formation and pathological fibrosis.
            </p>

            <h3>32. Cardiac Microvasculature</h3>

            <p>
              The myocardium has an extensive capillary network because cardiomyocytes have
              exceptionally high oxygen and metabolic requirements.
            </p>

            <p>
              Capillaries are closely associated with individual cardiac muscle cells, minimizing
              the diffusion distance between blood and metabolically active mitochondria.
            </p>

            <h3>33. Coronary Blood Vessels</h3>

            <p>
              The myocardium receives its blood supply from the coronary arteries. Large
              coronary vessels are located primarily within connective tissue associated with
              the epicardial surface and penetrate the myocardium through progressively smaller
              branches.
            </p>

            <p>
              Arterioles and capillaries within the myocardium regulate oxygen delivery according
              to metabolic demand.
            </p>

            <h3>34. Cardiac Capillaries</h3>

            <p>
              Cardiac capillaries are predominantly continuous capillaries lined by endothelial
              cells and supported by a basal lamina.
            </p>

            <p>
              Their dense distribution enables efficient exchange of oxygen, nutrients,
              metabolic substrates, hormones, and waste products.
            </p>

            <h3>35. Epicardium</h3>

            <p>
              The epicardium is the outermost layer of the heart wall and corresponds to the
              visceral layer of the serous pericardium.
            </p>

            <p>
              It consists of a surface layer of mesothelial cells supported by connective tissue.
            </p>

            <h3>36. Mesothelium</h3>

            <p>
              The surface of the epicardium is lined by simple squamous mesothelial cells.
            </p>

            <p>
              These cells contribute to the smooth serosal surface of the heart and facilitate
              low-friction movement between the heart and surrounding pericardial structures.
            </p>

            <h3>37. Epicardial Connective Tissue</h3>

            <p>
              Beneath the mesothelium is connective tissue containing collagen and elastic fibers,
              blood vessels, lymphatic vessels, nerves, and variable quantities of adipose tissue.
            </p>

            <h3>38. Epicardial Adipose Tissue</h3>

            <p>
              Adipose tissue is commonly present within the epicardium, particularly along the
              coronary vessels and cardiac grooves.
            </p>

            <p>
              Epicardial adipose tissue is metabolically active and can participate in local
              inflammatory and paracrine signaling.
            </p>

            <h3>39. Pericardium</h3>

            <p>
              The heart is enclosed by the pericardium, which provides mechanical protection
              and helps limit excessive cardiac displacement and distension.
            </p>

            <p>
              The serous pericardium consists of:
            </p>

            <ul>
              <li>Parietal layer</li>
              <li>Visceral layer</li>
            </ul>

            <p>
              The visceral layer is the epicardium.
            </p>

            <h3>40. Pericardial Cavity</h3>

            <p>
              The pericardial cavity is a potential space between the parietal and visceral
              layers of the serous pericardium.
            </p>

            <p>
              It contains a small amount of serous fluid that reduces friction during cardiac
              movement.
            </p>

            <h3>41. Cardiac Valves</h3>

            <p>
              Cardiac valves are specialized connective tissue structures covered by endothelium.
              They ensure unidirectional movement of blood through the heart.
            </p>

            <p>
              The four major valves are:
            </p>

            <ul>
              <li>Tricuspid valve</li>
              <li>Pulmonary valve</li>
              <li>Mitral valve</li>
              <li>Aortic valve</li>
            </ul>

            <h3>42. Histological Structure of Heart Valves</h3>

            <p>
              Valve leaflets consist primarily of a core of dense connective tissue covered
              by endothelial cells.
            </p>

            <p>
              The connective tissue contains collagen and elastic fibers arranged in layers
              that provide both strength and flexibility.
            </p>

            <h3>43. Valve Fibrosa</h3>

            <p>
              The fibrosa is the dense collagenous layer of a valve leaflet and provides
              structural strength and resistance to mechanical deformation.
            </p>

            <h3>44. Valve Spongiosa</h3>

            <p>
              The spongiosa contains relatively loose connective tissue rich in proteoglycans
              and glycosaminoglycans.
            </p>

            <p>
              It provides cushioning and permits movement between the more rigid collagenous
              components of the valve.
            </p>

            <h3>45. Valve Ventricularis</h3>

            <p>
              The ventricularis is an elastic-rich layer found on the ventricular side of
              atrioventricular valve leaflets.
            </p>

            <p>
              Elastic fibers help the valve return toward its resting configuration after
              deformation.
            </p>

            <h3>46. Chordae Tendineae</h3>

            <p>
              Chordae tendineae are collagen-rich fibrous cords that connect atrioventricular
              valve leaflets to papillary muscles.
            </p>

            <p>
              They prevent inversion or prolapse of the valve leaflets during ventricular
              systole.
            </p>

            <h3>47. Papillary Muscles</h3>

            <p>
              Papillary muscles are specialized projections of ventricular myocardium.
            </p>

            <p>
              During ventricular systole, they contract and place tension on the chordae
              tendineae, helping maintain proper closure of the atrioventricular valves.
            </p>

            <h3>48. Fibrous Skeleton of the Heart</h3>

            <p>
              The cardiac skeleton is composed of dense connective tissue surrounding the
              valve openings and forming structural support for the cardiac chambers and valves.
            </p>

            <p>
              Functions include:
            </p>

            <ul>
              <li>Supporting cardiac valves</li>
              <li>Maintaining the shape of valve openings</li>
              <li>Providing attachment sites for cardiac muscle</li>
              <li>Separating atrial and ventricular myocardium electrically</li>
              <li>Distributing mechanical forces</li>
            </ul>

            <h3>49. Cardiac Conduction System</h3>

            <p>
              The cardiac conduction system consists of specialized cardiac muscle cells
              responsible for generating and conducting electrical impulses.
            </p>

            <p>
              Major components include:
            </p>

            <ul>
              <li>Sinoatrial node</li>
              <li>Atrioventricular node</li>
              <li>Atrioventricular bundle</li>
              <li>Right bundle branch</li>
              <li>Left bundle branch</li>
              <li>Purkinje fiber network</li>
            </ul>

            <h3>50. Sinoatrial Node</h3>

            <p>
              The sinoatrial node is located in the right atrium near the junction of the
              superior vena cava and right atrium.
            </p>

            <p>
              It contains specialized pacemaker cells capable of spontaneous depolarization.
            </p>

            <p>
              These cells are smaller and generally contain fewer organized contractile
              myofibrils than ordinary working cardiomyocytes.
            </p>

            <h3>51. Atrioventricular Node</h3>

            <p>
              The atrioventricular node is located in the lower portion of the interatrial
              septum near the atrioventricular junction.
            </p>

            <p>
              Histologically, it consists of specialized small cardiac cells with fewer
              contractile elements than working myocardium.
            </p>

            <p>
              The AV node delays conduction of the electrical impulse, allowing time for
              ventricular filling following atrial contraction.
            </p>

            <h3>52. Atrioventricular Bundle</h3>

            <p>
              The atrioventricular bundle, or bundle of His, provides the normal electrical
              connection between the atria and ventricles.
            </p>

            <p>
              It penetrates the fibrous skeleton and divides into right and left bundle branches.
            </p>

            <h3>53. Purkinje Network</h3>

            <p>
              Purkinje fibers form an extensive subendocardial network within the ventricles.
            </p>

            <p>
              They conduct electrical impulses rapidly and distribute excitation throughout
              the ventricular myocardium.
            </p>

            <h3>54. Autonomic Innervation</h3>

            <p>
              The heart receives sympathetic and parasympathetic autonomic innervation.
            </p>

            <h4>Sympathetic Innervation</h4>

            <p>
              Sympathetic stimulation generally increases heart rate, contractility, and
              conduction velocity.
            </p>

            <h4>Parasympathetic Innervation</h4>

            <p>
              Parasympathetic stimulation, primarily through the vagus nerve, decreases
              sinoatrial node activity and slows AV nodal conduction.
            </p>

            <h3>55. Cardiac Nerve Plexus</h3>

            <p>
              Autonomic nerves form a cardiac plexus containing sympathetic and parasympathetic
              fibers as well as sensory afferents.
            </p>

            <p>
              Nerve fibers accompany blood vessels and enter the myocardium and conduction
              system.
            </p>

            <h3>56. Cardiac Lymphatics</h3>

            <p>
              The heart contains an extensive lymphatic network that drains interstitial fluid
              and macromolecules from the myocardium.
            </p>

            <p>
              Lymphatic vessels are particularly associated with connective tissue and follow
              pathways near coronary vessels.
            </p>

            <h3>57. Histology of the Interatrial Septum</h3>

            <p>
              The interatrial septum separates the right and left atria and contains cardiac
              muscle and connective tissue.
            </p>

            <p>
              The region of the fossa ovalis represents the adult remnant of the fetal foramen
              ovale.
            </p>

            <h3>58. Histology of the Interventricular Septum</h3>

            <p>
              The interventricular septum contains a substantial amount of cardiac muscle.
              Its muscular portion is particularly thick because it contributes to ventricular
              contraction and separates the ventricular chambers.
            </p>

            <p>
              A smaller membranous component contains dense connective tissue and is closely
              related to the cardiac conduction system.
            </p>

            <h3>59. Differences Between Cardiac and Skeletal Muscle</h3>

            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Cardiac Muscle</th>
                  <th>Skeletal Muscle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cell shape</td>
                  <td>Short, branching cells</td>
                  <td>Long cylindrical fibers</td>
                </tr>
                <tr>
                  <td>Nuclei</td>
                  <td>Usually central</td>
                  <td>Peripheral</td>
                </tr>
                <tr>
                  <td>Striations</td>
                  <td>Present</td>
                  <td>Present</td>
                </tr>
                <tr>
                  <td>Intercalated discs</td>
                  <td>Present</td>
                  <td>Absent</td>
                </tr>
                <tr>
                  <td>Gap junctions</td>
                  <td>Present</td>
                  <td>Absent between individual fibers</td>
                </tr>
                <tr>
                  <td>Control</td>
                  <td>Involuntary</td>
                  <td>Voluntary</td>
                </tr>
                <tr>
                  <td>Mitochondria</td>
                  <td>Very abundant</td>
                  <td>Variable</td>
                </tr>
                <tr>
                  <td>Regeneration</td>
                  <td>Very limited</td>
                  <td>Greater regenerative capacity</td>
                </tr>
              </tbody>
            </table>

            <h3>60. Cardiac Muscle Compared with Smooth Muscle</h3>

            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Cardiac Muscle</th>
                  <th>Smooth Muscle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Striations</td>
                  <td>Present</td>
                  <td>Absent</td>
                </tr>
                <tr>
                  <td>Nuclei</td>
                  <td>Usually central</td>
                  <td>Central and elongated</td>
                </tr>
                <tr>
                  <td>Sarcomeres</td>
                  <td>Present</td>
                  <td>Absent</td>
                </tr>
                <tr>
                  <td>Intercalated discs</td>
                  <td>Present</td>
                  <td>Absent</td>
                </tr>
                <tr>
                  <td>Primary function</td>
                  <td>Rhythmic cardiac contraction</td>
                  <td>Visceral and vascular contraction</td>
                </tr>
              </tbody>
            </table>

            <h3>61. Histological Basis of Cardiac Contraction</h3>

            <p>
              Cardiac contraction depends on the organized arrangement of actin and myosin
              within sarcomeres.
            </p>

            <p>
              Electrical depolarization leads to calcium entry through L-type calcium channels,
              followed by calcium release from the sarcoplasmic reticulum.
            </p>

            <p>
              Calcium binds to troponin C, producing conformational changes in the troponin-
              tropomyosin complex and allowing myosin to interact with actin.
            </p>

            <p>
              ATP-dependent cross-bridge cycling generates force and shortens the sarcomeres.
            </p>

            <h3>62. Histological Basis of Cardiac Relaxation</h3>

            <p>
              Relaxation requires removal of calcium from the cytosol. Calcium is transported
              back into the sarcoplasmic reticulum and also removed from the cell through
              membrane transport mechanisms.
            </p>

            <p>
              As intracellular calcium concentration falls, tropomyosin again inhibits
              actin-myosin interaction and the cardiomyocyte relaxes.
            </p>

            <h3>63. Cardiac Regeneration</h3>

            <p>
              Adult cardiomyocytes have limited proliferative capacity. Consequently, significant
              loss of cardiac muscle is generally followed by repair involving fibroblast
              activation and collagen deposition rather than complete regeneration of the
              original myocardium.
            </p>

            <h3>64. Myocardial Infarction and Histology</h3>

            <p>
              Myocardial infarction produces characteristic sequential histological changes
              following ischemic injury.
            </p>

            <p>
              Early changes include cardiomyocyte injury and coagulative necrosis, followed
              by inflammatory cell infiltration.
            </p>

            <p>
              Macrophages subsequently remove necrotic tissue. Granulation tissue develops,
              followed by collagen deposition and formation of a fibrous scar.
            </p>

            <h3>65. Coagulative Necrosis in the Heart</h3>

            <p>
              Ischemic injury to cardiac muscle typically produces coagulative necrosis.
              Cellular architecture may remain recognizable for a period despite loss of
              cellular viability.
            </p>

            <p>
              Histological features may include loss of nuclear staining, cytoplasmic
              eosinophilia, and progressive cellular fragmentation.
            </p>

            <h3>66. Myocardial Fibrosis</h3>

            <p>
              Fibrosis represents excessive deposition of extracellular matrix, particularly
              collagen, within the myocardium.
            </p>

            <p>
              Fibrosis can increase ventricular stiffness, impair diastolic function, disrupt
              normal electrical conduction, and create a substrate for arrhythmias.
            </p>

            <h3>67. Hypertrophy of Cardiomyocytes</h3>

            <p>
              Cardiomyocytes respond to chronic pressure or volume overload primarily through
              hypertrophy rather than extensive cell division.
            </p>

            <p>
              Hypertrophy involves enlargement of individual cardiomyocytes and increased
              synthesis of contractile and structural proteins.
            </p>

            <h3>68. Pressure-Overload Hypertrophy</h3>

            <p>
              Chronic pressure overload, such as that caused by systemic hypertension or
              aortic stenosis, can produce concentric ventricular hypertrophy.
            </p>

            <p>
              Histologically, cardiomyocytes become enlarged and may develop enlarged,
              hyperchromatic nuclei.
            </p>

            <h3>69. Volume-Overload Hypertrophy</h3>

            <p>
              Chronic volume overload can result in eccentric hypertrophy characterized by
              enlargement of cardiomyocytes together with ventricular chamber dilation.
            </p>

            <p>
              This pattern may occur in conditions involving chronic valvular regurgitation
              or other causes of increased ventricular volume.
            </p>

            <h3>70. Histology of Myocarditis</h3>

            <p>
              Myocarditis is characterized histologically by inflammatory infiltration of the
              myocardium accompanied by cardiomyocyte injury or necrosis.
            </p>

            <p>
              The cellular composition of the inflammatory infiltrate varies according to
              the underlying cause.
            </p>

            <h3>71. Histology of Endocarditis</h3>

            <p>
              Infective endocarditis is characterized by inflammatory destruction of
              endocardial surfaces, particularly the cardiac valves, with formation of
              vegetations composed of fibrin, inflammatory cells, platelets, and microorganisms
              in infectious cases.
            </p>

            <h3>72. Histology of Pericarditis</h3>

            <p>
              Pericarditis produces inflammation of the pericardial surfaces. Depending on
              the cause, the inflammatory process may be serous, fibrinous, purulent,
              hemorrhagic, or associated with other exudative patterns.
            </p>

            <h3>73. Histology of Atherosclerosis</h3>

            <p>
              Atherosclerotic plaques develop within the intima of arteries and contain
              lipid, inflammatory cells, extracellular matrix, and smooth muscle cells.
            </p>

            <p>
              Advanced plaques may contain a lipid-rich necrotic core covered by a fibrous cap.
            </p>

            <p>
              Plaque rupture or erosion can expose thrombogenic material and initiate platelet
              activation and thrombus formation.
            </p>

            <h3>74. Histology of Coronary Arteries</h3>

            <p>
              Coronary arteries are muscular arteries consisting of three principal layers:
            </p>

            <ul>
              <li>Tunica intima</li>
              <li>Tunica media</li>
              <li>Tunica adventitia</li>
            </ul>

            <p>
              The tunica media contains substantial amounts of vascular smooth muscle,
              allowing regulation of coronary vascular resistance and blood flow.
            </p>

            <h3>75. Tunica Intima</h3>

            <p>
              The tunica intima consists primarily of endothelial cells and supporting
              subendothelial connective tissue.
            </p>

            <p>
              Endothelial dysfunction can contribute to inflammation, thrombosis, and
              development of atherosclerosis.
            </p>

            <h3>76. Tunica Media</h3>

            <p>
              The tunica media contains concentric layers of vascular smooth muscle cells
              embedded within extracellular matrix.
            </p>

            <p>
              Contraction and relaxation of these cells regulate vascular diameter and
              therefore influence coronary blood flow.
            </p>

            <h3>77. Tunica Adventitia</h3>

            <p>
              The adventitia is composed primarily of connective tissue and contains larger
              nerves, lymphatic vessels, and in sufficiently large vessels, the vasa vasorum.
            </p>

            <h3>78. Histological Identification of Cardiac Muscle</h3>

            <p>
              Cardiac muscle can be identified microscopically by the combination of:
            </p>

            <ul>
              <li>Striated fibers</li>
              <li>Branching cells</li>
              <li>Centrally located nuclei</li>
              <li>Intercalated discs</li>
              <li>Abundant capillaries</li>
              <li>Abundant mitochondria</li>
              <li>Relatively short individual cells</li>
            </ul>

            <h3>79. Electron Microscopy of Cardiomyocytes</h3>

            <p>
              Electron microscopy reveals densely packed myofibrils, numerous mitochondria,
              sarcoplasmic reticulum, T-tubules, glycogen deposits, and specialized junctional
              complexes.
            </p>

            <p>
              The ultrastructural organization reflects the need for highly coordinated
              excitation, contraction, energy production, and intercellular communication.
            </p>

            <h3>80. Histological Relationship Between Structure and Function</h3>

            <p>
              The microscopic architecture of the heart is closely related to its physiological
              function.
            </p>

            <ul>
              <li>
                <strong>Cardiomyocytes</strong> generate mechanical force.
              </li>
              <li>
                <strong>Intercalated discs</strong> provide mechanical and electrical coupling.
              </li>
              <li>
                <strong>Gap junctions</strong> permit electrical communication.
              </li>
              <li>
                <strong>Desmosomes</strong> resist mechanical separation.
              </li>
              <li>
                <strong>Myofibrils</strong> generate contraction.
              </li>
              <li>
                <strong>Mitochondria</strong> provide ATP.
              </li>
              <li>
                <strong>T-tubules</strong> transmit electrical signals into the cell.
              </li>
              <li>
                <strong>Sarcoplasmic reticulum</strong> regulates intracellular calcium.
              </li>
              <li>
                <strong>Endocardium</strong> provides a smooth blood-contacting surface.
              </li>
              <li>
                <strong>Myocardium</strong> provides the major contractile force.
              </li>
              <li>
                <strong>Epicardium</strong> provides an external serosal surface and contains
                vessels, nerves, lymphatics, and adipose tissue.
              </li>
              <li>
                <strong>Fibrous skeleton</strong> supports valves and contributes to electrical
                isolation between atria and ventricles.
              </li>
              <li>
                <strong>Purkinje fibers</strong> rapidly distribute ventricular excitation.
              </li>
            </ul>

            <h3>81. Summary of Heart Histology</h3>

            <p>
              The heart is a highly specialized organ in which microscopic structure is directly
              integrated with mechanical, electrical, metabolic, and hemodynamic function.
              The myocardium is composed predominantly of branching, striated cardiomyocytes
              containing centrally located nuclei, abundant mitochondria, extensive myofibrils,
              and specialized membrane systems.
            </p>

            <p>
              Intercalated discs establish strong mechanical connections through fascia adherens
              and desmosomes while gap junctions provide electrical coupling between adjacent
              cells. This arrangement allows the myocardium to function as a coordinated
              contractile syncytium.
            </p>

            <p>
              The endocardium provides a specialized endothelial lining for the cardiac chambers
              and valves, while the myocardium generates the force required for cardiac pumping.
              The epicardium forms the visceral layer of the serous pericardium and contains
              connective tissue, coronary vessels, nerves, lymphatics, and adipose tissue.
            </p>

            <p>
              Specialized conducting cells form the sinoatrial node, atrioventricular node,
              atrioventricular bundle, bundle branches, and Purkinje network. These structures
              coordinate the electrical activation of the heart.
            </p>

            <p>
              The dense coronary microvascular network supplies oxygen and metabolic substrates
              to the highly oxidative myocardium. Cardiac fibroblasts and extracellular matrix
              provide structural support but can also contribute to pathological fibrosis after
              chronic injury or myocardial infarction.
            </p>

            <p>
              Consequently, understanding heart histology provides the structural basis for
              understanding cardiac physiology, ischemic injury, myocardial infarction,
              cardiomyopathy, fibrosis, arrhythmias, valvular disease, and other cardiovascular
              disorders.
            </p>
          `,

          embryology: `
            <h2>Heart Embryology</h2>

            <p>
              The cardiovascular system is the first major organ system to become functionally
              active during embryonic development. This early development reflects the increasing
              metabolic requirements of the rapidly growing embryo, which eventually make simple
              diffusion insufficient for the transport of oxygen, nutrients, hormones, and
              metabolic waste products.
            </p>

            <p>
              The heart develops primarily from <strong>splanchnic mesoderm</strong> within the
              cardiogenic region. Development begins during the third week of embryogenesis,
              with formation of paired cardiac fields that subsequently fuse to produce the
              primitive heart tube.
            </p>

            <p>
              The developing cardiovascular system includes the primitive heart, arterial and
              venous systems, blood islands, and an extensive vascular network that connects
              the embryo with the extraembryonic circulation.
            </p>

            <h3>1. Origin of the Heart</h3>

            <p>
              The heart originates primarily from mesoderm. During gastrulation, cells migrate
              through the primitive streak and contribute to the mesodermal layers of the embryo.
            </p>

            <p>
              Cardiac progenitor cells are located within the <strong>splanchnic mesoderm</strong>
              of the lateral plate mesoderm.
            </p>

            <p>
              These cells differentiate into cardiac precursor cells that contribute to the
              myocardium, endocardium, and other components of the developing heart.
            </p>

            <h3>2. Cardiogenic Field</h3>

            <p>
              The earliest recognizable region involved in cardiac development is the
              <strong>cardiogenic field</strong>.
            </p>

            <p>
              It is initially positioned cranial to the developing neural plate and
              oropharyngeal membrane.
            </p>

            <p>
              As embryonic folding occurs, the cardiogenic region is repositioned ventral
              and caudal relative to the developing foregut.
            </p>

            <h3>3. Primary Heart Field</h3>

            <p>
              The <strong>primary heart field</strong> contributes substantially to the
              developing atria and left ventricle.
            </p>

            <p>
              Cells within this field differentiate into cardiac precursor cells and eventually
              contribute to the primitive cardiac tube.
            </p>

            <h3>4. Secondary Heart Field</h3>

            <p>
              The <strong>secondary heart field</strong> provides additional cardiac progenitor
              cells that contribute particularly to the right ventricle and outflow tract.
            </p>

            <p>
              Proper interaction between the primary and secondary heart fields is essential
              for normal elongation and remodeling of the developing heart tube.
            </p>

            <h3>5. Formation of the Endocardial Tubes</h3>

            <p>
              Within the cardiogenic mesoderm, clusters of endothelial precursor cells form
              vascular channels known as <strong>endocardial tubes</strong>.
            </p>

            <p>
              These paired tubes are initially separated because the embryo has not yet
              undergone the folding events that bring them together.
            </p>

            <h3>6. Embryonic Folding</h3>

            <p>
              Cranial-caudal and lateral folding of the embryo brings the paired cardiac
              structures toward the midline.
            </p>

            <p>
              The paired endocardial tubes approach one another and fuse to form a single
              primitive heart tube.
            </p>

            <h3>7. Primitive Heart Tube</h3>

            <p>
              The primitive heart tube is the fundamental early structure from which the
              mature heart develops.
            </p>

            <p>
              It initially consists of an inner endothelial lining surrounded by developing
              myocardial tissue.
            </p>

            <p>
              The primitive tube subsequently undergoes rapid elongation, looping, septation,
              remodeling, and regional differentiation.
            </p>

            <h3>8. Layers of the Primitive Heart</h3>

            <p>
              The developing heart tube contains several important tissue components.
            </p>

            <ul>
              <li>
                <strong>Endocardium:</strong> develops into the endothelial lining of the
                cardiac chambers and contributes to valve formation.
              </li>
              <li>
                <strong>Myocardium:</strong> develops into the principal muscular component
                of the heart.
              </li>
              <li>
                <strong>Cardiac jelly:</strong> extracellular matrix located between the
                endocardium and myocardium and important in valve and septal development.
              </li>
              <li>
                <strong>Epicardial precursor cells:</strong> contribute to the epicardium
                and associated structures.
              </li>
            </ul>

            <h3>9. Cardiac Jelly</h3>

            <p>
              The cardiac jelly is a specialized extracellular matrix located between the
              endocardial and myocardial layers of the primitive heart.
            </p>

            <p>
              It is rich in extracellular matrix components and provides an important
              developmental environment for formation of the endocardial cushions.
            </p>

            <h3>10. Heart Tube Regions</h3>

            <p>
              The primitive heart tube develops into several recognizable regions arranged
              from the arterial to venous end.
            </p>

            <ul>
              <li>Truncus arteriosus</li>
              <li>Bulbus cordis</li>
              <li>Primitive ventricle</li>
              <li>Primitive atrium</li>
              <li>Sinus venosus</li>
            </ul>

            <h3>11. Truncus Arteriosus</h3>

            <p>
              The truncus arteriosus is the most distal portion of the primitive heart tube.
            </p>

            <p>
              It contributes to the proximal portions of the great arteries and is subsequently
              divided into the ascending aorta and pulmonary trunk.
            </p>

            <h3>12. Bulbus Cordis</h3>

            <p>
              The bulbus cordis contributes substantially to the ventricular outflow regions.
            </p>

            <p>
              It contributes particularly to structures associated with the right ventricular
              outflow tract and also participates in formation of portions of the left
              ventricular outflow pathway.
            </p>

            <h3>13. Primitive Ventricle</h3>

            <p>
              The primitive ventricle contributes predominantly to the trabeculated portion
              of the left ventricle.
            </p>

            <h3>14. Primitive Atrium</h3>

            <p>
              The primitive atrium contributes to the trabeculated portions of both atria,
              particularly the atrial appendages.
            </p>

            <h3>15. Sinus Venosus</h3>

            <p>
              The sinus venosus initially receives venous blood from the embryonic, placental,
              and vitelline circulations.
            </p>

            <p>
              Remodeling of the sinus venosus contributes to important portions of the mature
              right atrium.
            </p>

            <h3>16. Right Horn of the Sinus Venosus</h3>

            <p>
              The right horn of the sinus venosus enlarges as venous return becomes increasingly
              directed toward the right side.
            </p>

            <p>
              It becomes incorporated into the smooth-walled portion of the right atrium,
              known as the <strong>sinus venarum</strong>.
            </p>

            <h3>17. Left Horn of the Sinus Venosus</h3>

            <p>
              The left horn of the sinus venosus becomes progressively smaller.
            </p>

            <p>
              It contributes primarily to the <strong>coronary sinus</strong> and a small
              venous structure known as the oblique vein of the left atrium.
            </p>

            <h3>18. Cardiac Looping</h3>

            <p>
              The primitive heart tube undergoes a major morphogenetic process called
              <strong>cardiac looping</strong>.
            </p>

            <p>
              The tube bends and twists so that the regions destined to become the mature
              cardiac chambers acquire their appropriate spatial relationships.
            </p>

            <p>
              Normal looping is essential for subsequent chamber formation and alignment
              of the atrioventricular and outflow pathways.
            </p>

            <h3>19. Rightward Cardiac Looping</h3>

            <p>
              In normal development, the primitive heart tube loops toward the right,
              producing a configuration called <strong>D-looping</strong>.
            </p>

            <p>
              Abnormal looping can result in abnormal cardiac orientation and congenital
              malformations.
            </p>

            <h3>20. Formation of the Cardiac Chambers</h3>

            <p>
              The mature four-chambered heart develops through coordinated growth,
              expansion, septation, remodeling, and incorporation of portions of the
              primitive venous and arterial structures.
            </p>

            <p>
              The atria and ventricles do not simply arise as four separate structures.
              Instead, they develop from specific regions of the primitive heart tube.
            </p>

            <h3>21. Development of the Right Atrium</h3>

            <p>
              The right atrium develops from two major sources:
            </p>

            <ul>
              <li>Primitive atrium</li>
              <li>Right horn of the sinus venosus</li>
            </ul>

            <p>
              The primitive atrium forms the trabeculated portion, while incorporation of
              the right horn of the sinus venosus produces the smooth posterior wall.
            </p>

            <h3>22. Crista Terminalis</h3>

            <p>
              The boundary between the smooth sinus venarum and the trabeculated portion
              of the right atrium is represented internally by the <strong>crista terminalis</strong>.
            </p>

            <p>
              Externally, this developmental boundary corresponds approximately to the
              sulcus terminalis.
            </p>

            <h3>23. Development of the Left Atrium</h3>

            <p>
              The left atrium develops primarily from the primitive atrium.
            </p>

            <p>
              A major developmental event is incorporation of the common pulmonary vein
              and its branches into the posterior wall of the left atrium.
            </p>

            <p>
              This incorporation produces the smooth-walled portion of the mature left atrium.
            </p>

            <h3>24. Pulmonary Vein Development</h3>

            <p>
              A common pulmonary vein develops from the posterior wall of the primitive
              left atrium.
            </p>

            <p>
              It connects with the developing pulmonary venous plexus.
            </p>

            <p>
              Progressive incorporation of the pulmonary vein and its branches into the
              left atrium ultimately produces the four pulmonary veins opening into the
              mature left atrium.
            </p>

            <h3>25. Development of the Left Ventricle</h3>

            <p>
              The primitive ventricle contributes predominantly to the trabeculated
              myocardium of the left ventricle.
            </p>

            <p>
              The left ventricular outflow tract also receives contributions from the
              developing outflow tract.
            </p>

            <h3>26. Development of the Right Ventricle</h3>

            <p>
              The right ventricle develops substantially from the bulbus cordis.
            </p>

            <p>
              The developing right ventricle becomes connected with the pulmonary outflow
              pathway.
            </p>

            <h3>27. Ventricular Septation</h3>

            <p>
              Formation of the interventricular septum separates the primitive ventricular
              region into right and left ventricular compartments.
            </p>

            <p>
              Ventricular septation involves both muscular and membranous components.
            </p>

            <h3>28. Muscular Interventricular Septum</h3>

            <p>
              The muscular interventricular septum develops as the ventricular myocardium
              expands.
            </p>

            <p>
              Initially, an opening called the <strong>interventricular foramen</strong>
              remains between the growing muscular septum and the endocardial cushions.
            </p>

            <h3>29. Membranous Interventricular Septum</h3>

            <p>
              The membranous portion of the interventricular septum develops from tissue
              associated with the endocardial cushions and conotruncal structures.
            </p>

            <p>
              Closure of the interventricular foramen completes separation of the right
              and left ventricles.
            </p>

            <h3>30. Ventricular Septal Defect</h3>

            <p>
              Failure of appropriate ventricular septation can produce a
              <strong>ventricular septal defect (VSD)</strong>.
            </p>

            <p>
              VSDs are among the most common congenital cardiac abnormalities.
            </p>

            <p>
              Defects may occur in different regions of the interventricular septum,
              with membranous or perimembranous defects being particularly common.
            </p>

            <h3>31. Atrial Septation</h3>

            <p>
              Formation of the interatrial septum is a complex process involving sequential
              formation, growth, perforation, and fusion of septal structures.
            </p>

            <p>
              The fetal circulation requires a temporary communication between the right
              and left atria, allowing blood to bypass the non-functioning fetal lungs.
            </p>

            <h3>32. Septum Primum</h3>

            <p>
              The <strong>septum primum</strong> develops as a thin membrane growing downward
              from the roof of the primitive atrium toward the endocardial cushions.
            </p>

            <p>
              The space between the septum primum and the endocardial cushions is called
              the <strong>ostium primum</strong>.
            </p>

            <h3>33. Ostium Primum</h3>

            <p>
              The ostium primum provides an early communication between the right and left
              atrial chambers.
            </p>

            <p>
              As the septum primum grows and approaches the endocardial cushions, the
              ostium primum progressively closes.
            </p>

            <h3>34. Ostium Secundum</h3>

            <p>
              Before the ostium primum completely closes, programmed cell death creates
              new openings in the superior portion of the septum primum.
            </p>

            <p>
              These openings merge to form the <strong>ostium secundum</strong>.
            </p>

            <p>
              The ostium secundum maintains interatrial blood flow during development.
            </p>

            <h3>35. Septum Secundum</h3>

            <p>
              A second septal structure called the <strong>septum secundum</strong> develops
              to the right of the septum primum.
            </p>

            <p>
              It does not completely close the atrial communication, leaving an opening
              called the <strong>foramen ovale</strong>.
            </p>

            <h3>36. Foramen Ovale</h3>

            <p>
              The foramen ovale allows blood to pass from the right atrium to the left atrium
              during fetal life.
            </p>

            <p>
              This right-to-left shunt allows relatively oxygenated blood returning from the
              placenta to reach the systemic circulation without passing through the fetal
              lungs.
            </p>

            <h3>37. Septum Primum as Valve of the Foramen Ovale</h3>

            <p>
              The lower portion of the septum primum functions as a flap-like valve over
              the foramen ovale.
            </p>

            <p>
              The pressure relationship in the fetal heart permits blood to move predominantly
              from the right atrium toward the left atrium while preventing significant
              reverse flow.
            </p>

            <h3>38. Closure of the Foramen Ovale at Birth</h3>

            <p>
              After birth, expansion of the lungs markedly decreases pulmonary vascular
              resistance.
            </p>

            <p>
              Pulmonary venous return increases, raising left atrial pressure.
            </p>

            <p>
              Increased left atrial pressure presses the septum primum against the septum
              secundum, producing functional closure of the foramen ovale.
            </p>

            <p>
              Anatomical fusion may subsequently occur, producing the adult
              <strong>fossa ovalis</strong>.
            </p>

            <h3>39. Patent Foramen Ovale</h3>

            <p>
              If complete anatomical fusion does not occur, a <strong>patent foramen ovale
              (PFO)</strong> may remain.
            </p>

            <p>
              A PFO is different from a true atrial septal defect because the septal
              structures are present but incompletely fused.
            </p>

            <h3>40. Endocardial Cushions</h3>

            <p>
              Endocardial cushions are specialized swellings of tissue within the developing
              heart.
            </p>

            <p>
              They are essential for:
            </p>

            <ul>
              <li>Atrioventricular septation</li>
              <li>Formation of portions of the atrial septum</li>
              <li>Formation of the membranous interventricular septum</li>
              <li>Development of atrioventricular valves</li>
              <li>Remodeling of the atrioventricular canal</li>
            </ul>

            <h3>41. Atrioventricular Canal</h3>

            <p>
              Initially, a common atrioventricular canal connects the primitive atrium
              with the primitive ventricle.
            </p>

            <p>
              Endocardial cushion development divides this common canal into separate
              right and left atrioventricular pathways.
            </p>

            <h3>42. Atrioventricular Valves</h3>

            <p>
              The atrioventricular valves develop from endocardial cushion tissue and
              surrounding ventricular tissue.
            </p>

            <p>
              Remodeling produces the:
            </p>

            <ul>
              <li>Tricuspid valve</li>
              <li>Mitral valve</li>
            </ul>

            <h3>43. Development of the Tricuspid Valve</h3>

            <p>
              The tricuspid valve develops within the right atrioventricular canal.
            </p>

            <p>
              It ultimately consists of three major leaflets supported by chordae tendineae
              and papillary muscles.
            </p>

            <h3>44. Development of the Mitral Valve</h3>

            <p>
              The mitral valve develops within the left atrioventricular canal.
            </p>

            <p>
              It forms two major leaflets and becomes connected to papillary muscles through
              chordae tendineae.
            </p>

            <h3>45. Outflow Tract Development</h3>

            <p>
              The embryonic outflow tract develops into the pathways connecting the ventricles
              with the great arteries.
            </p>

            <p>
              Major structures include the conus and truncus regions.
            </p>

            <h3>46. Conotruncal Development</h3>

            <p>
              The conotruncal region undergoes complex remodeling to separate the future
              systemic and pulmonary outflow pathways.
            </p>

            <p>
              Neural crest-derived cells make important contributions to the development
              of the cardiac outflow tract.
            </p>

            <h3>47. Aorticopulmonary Septum</h3>

            <p>
              The developing outflow tract is divided into aortic and pulmonary channels
              by formation of the <strong>aorticopulmonary septum</strong>.
            </p>

            <p>
              This process establishes separate pathways for blood leaving the left and
              right ventricles.
            </p>

            <h3>48. Neural Crest Cells</h3>

            <p>
              Cardiac neural crest cells migrate into the developing pharyngeal apparatus
              and cardiac outflow tract.
            </p>

            <p>
              They contribute importantly to conotruncal septation and development of
              structures associated with the great arteries.
            </p>

            <p>
              Abnormal neural crest cell development can therefore produce important
              congenital heart abnormalities.
            </p>

            <h3>49. Aortic and Pulmonary Trunks</h3>

            <p>
              Proper separation of the truncal outflow region produces the ascending aorta
              and pulmonary trunk.
            </p>

            <p>
              The aorta ultimately carries oxygenated blood from the left ventricle into
              systemic circulation, while the pulmonary trunk carries deoxygenated blood
              from the right ventricle toward the lungs.
            </p>

            <h3>50. Development of Semilunar Valves</h3>

            <p>
              The aortic and pulmonary valves develop from swellings within the developing
              outflow tract.
            </p>

            <p>
              Remodeling of these swellings produces thin, flexible valve leaflets capable
              of preventing retrograde blood flow.
            </p>

            <h3>51. Aortic Valve</h3>

            <p>
              The aortic valve develops at the junction between the left ventricular outflow
              tract and ascending aorta.
            </p>

            <p>
              It eventually consists of three semilunar cusps in the normal heart.
            </p>

            <h3>52. Pulmonary Valve</h3>

            <p>
              The pulmonary valve develops between the right ventricular outflow tract
              and pulmonary trunk.
            </p>

            <p>
              It normally contains three semilunar cusps.
            </p>

            <h3>53. Development of the Coronary Circulation</h3>

            <p>
              Coronary vessels develop in association with the epicardium and subepicardial
              vascular network.
            </p>

            <p>
              Vascular connections eventually establish communication between the coronary
              circulation and the developing aorta.
            </p>

            <h3>54. Development of the Epicardium</h3>

            <p>
              The epicardium develops from cells associated with the proepicardial organ.
            </p>

            <p>
              These cells spread over the surface of the developing myocardium and form
              the epicardial layer.
            </p>

            <p>
              Epicardial-derived cells contribute to several important cardiac cell
              populations, including fibroblast-like and vascular-associated cells.
            </p>

            <h3>55. Development of the Cardiac Conduction System</h3>

            <p>
              Specialized regions of the developing myocardium differentiate into pacemaker
              and conducting tissues.
            </p>

            <p>
              These structures eventually form the sinoatrial node, atrioventricular node,
              atrioventricular bundle, bundle branches, and Purkinje network.
            </p>

            <h3>56. Sinoatrial Node Development</h3>

            <p>
              The sinoatrial node develops in the region of the venous pole of the embryonic
              heart and becomes associated with the right atrium.
            </p>

            <p>
              It becomes the dominant pacemaker of the mature heart.
            </p>

            <h3>57. Atrioventricular Node Development</h3>

            <p>
              The atrioventricular conduction system develops near the atrioventricular
              junction and provides the principal pathway for electrical transmission
              from the atria to the ventricles.
            </p>

            <h3>58. Fetal Circulation</h3>

            <p>
              Fetal circulation differs fundamentally from postnatal circulation because
              the fetal lungs are not responsible for oxygenating the blood.
            </p>

            <p>
              Oxygen and nutrients are obtained from the maternal circulation through
              the placenta.
            </p>

            <p>
              Three major fetal circulatory shunts are particularly important:
            </p>

            <ul>
              <li>Foramen ovale</li>
              <li>Ductus arteriosus</li>
              <li>Ductus venosus</li>
            </ul>

            <h3>59. Placental Circulation</h3>

            <p>
              Oxygenated blood from the placenta reaches the fetus through the
              <strong>umbilical vein</strong>.
            </p>

            <p>
              The umbilical vein carries relatively oxygen-rich blood toward the fetal
              liver and inferior vena cava.
            </p>

            <h3>60. Ductus Venosus</h3>

            <p>
              The ductus venosus provides a low-resistance pathway allowing a significant
              portion of umbilical venous blood to bypass the hepatic circulation.
            </p>

            <p>
              Blood enters the inferior vena cava and subsequently reaches the right atrium.
            </p>

            <h3>61. Foramen Ovale in Fetal Circulation</h3>

            <p>
              Blood entering the right atrium from the inferior vena cava is preferentially
              directed toward the foramen ovale.
            </p>

            <p>
              It passes into the left atrium and then into the left ventricle and ascending
              aorta.
            </p>

            <p>
              This arrangement preferentially directs relatively oxygenated blood toward
              the coronary and cerebral circulations.
            </p>

            <h3>62. Ductus Arteriosus</h3>

            <p>
              The ductus arteriosus connects the pulmonary trunk with the descending aorta.
            </p>

            <p>
              Because pulmonary vascular resistance is high in the fetus, much of the blood
              entering the pulmonary trunk is diverted through the ductus arteriosus into
              the systemic circulation.
            </p>

            <h3>63. Umbilical Arteries</h3>

            <p>
              The umbilical arteries carry deoxygenated blood from the fetus back toward
              the placenta.
            </p>

            <p>
              In fetal life, they arise from branches associated with the internal iliac
              arteries.
            </p>

            <h3>64. Fetal Circulatory Flow</h3>

            <p>
              A simplified pathway of fetal blood flow is:
            </p>

            <p>
              Placenta → umbilical vein → ductus venosus → inferior vena cava →
              right atrium → foramen ovale → left atrium → left ventricle →
              ascending aorta.
            </p>

            <p>
              Blood returning from the superior vena cava enters the right atrium and is
              preferentially directed toward the right ventricle and pulmonary trunk.
              Because pulmonary resistance is high, much of this blood passes through the
              ductus arteriosus into the descending aorta.
            </p>

            <h3>65. Fetal Pulmonary Circulation</h3>

            <p>
              Only a relatively small fraction of right ventricular output passes through
              the fetal pulmonary circulation.
            </p>

            <p>
              The high pulmonary vascular resistance is related to the relatively collapsed
              and fluid-filled fetal lungs.
            </p>

            <h3>66. Transition at Birth</h3>

            <p>
              Birth produces profound changes in cardiovascular physiology.
            </p>

            <p>
              The first breaths expand the lungs and markedly reduce pulmonary vascular
              resistance.
            </p>

            <p>
              Increased pulmonary blood flow raises pulmonary venous return and increases
              left atrial pressure.
            </p>

            <p>
              At the same time, removal of the placental circulation increases systemic
              vascular resistance.
            </p>

            <h3>67. Functional Closure of the Foramen Ovale</h3>

            <p>
              Increased left atrial pressure following birth pushes the septum primum
              against the septum secundum.
            </p>

            <p>
              This produces functional closure of the foramen ovale.
            </p>

            <h3>68. Closure of the Ductus Arteriosus</h3>

            <p>
              Increased oxygen tension and changes in circulating mediators after birth
              promote constriction of the ductus arteriosus.
            </p>

            <p>
              The ductus arteriosus subsequently undergoes anatomical remodeling and becomes
              the <strong>ligamentum arteriosum</strong>.
            </p>

            <h3>69. Closure of the Ductus Venosus</h3>

            <p>
              Following separation from placental circulation, umbilical venous flow ceases.
            </p>

            <p>
              The ductus venosus closes and becomes the <strong>ligamentum venosum</strong>.
            </p>

            <h3>70. Umbilical Vein Remnant</h3>

            <p>
              The fetal umbilical vein becomes the <strong>ligamentum teres hepatis</strong>,
              also known as the round ligament of the liver.
            </p>

            <h3>71. Umbilical Artery Remnants</h3>

            <p>
              The distal portions of the umbilical arteries become the medial umbilical
              ligaments after birth.
            </p>

            <p>
              Proximal portions remain patent as branches of the internal iliac arteries.
            </p>

            <h3>72. Major Congenital Heart Defects</h3>

            <p>
              Congenital heart disease can result from abnormalities in cardiac looping,
              septation, valve development, outflow tract development, vascular remodeling,
              or maturation of the conduction system.
            </p>

            <h3>73. Atrial Septal Defect</h3>

            <p>
              An atrial septal defect is an abnormal persistent communication between the
              right and left atria.
            </p>

            <p>
              Important developmental types include defects involving the ostium secundum,
              ostium primum, or sinus venosus regions.
            </p>

            <h3>74. Ventricular Septal Defect</h3>

            <p>
              A ventricular septal defect results from incomplete formation of the
              interventricular septum.
            </p>

            <p>
              Membranous or perimembranous defects are particularly common.
            </p>

            <h3>75. Atrioventricular Septal Defect</h3>

            <p>
              Abnormal development of the endocardial cushions can produce an
              <strong>atrioventricular septal defect</strong>.
            </p>

            <p>
              This may involve abnormalities of the atrial and ventricular septa together
              with abnormal atrioventricular valve formation.
            </p>

            <h3>76. Patent Ductus Arteriosus</h3>

            <p>
              Failure of the ductus arteriosus to close after birth produces
              <strong>patent ductus arteriosus (PDA)</strong>.
            </p>

            <p>
              Persistent communication between the aorta and pulmonary artery can alter
              pulmonary and systemic blood flow.
            </p>

            <h3>77. Coarctation of the Aorta</h3>

            <p>
              Coarctation of the aorta is a congenital narrowing of the aorta, commonly
              involving the region near the ductus arteriosus.
            </p>

            <p>
              The severity depends on the degree and location of the narrowing and on
              collateral circulation.
            </p>

            <h3>78. Tetralogy of Fallot</h3>

            <p>
              Tetralogy of Fallot is a conotruncal developmental abnormality characterized
              by four major anatomical features:
            </p>

            <ol>
              <li>Ventricular septal defect</li>
              <li>Right ventricular outflow obstruction</li>
              <li>Overriding aorta</li>
              <li>Right ventricular hypertrophy</li>
            </ol>

            <p>
              The underlying developmental abnormality involves abnormal alignment and
              development of the outflow tract.
            </p>

            <h3>79. Transposition of the Great Arteries</h3>

            <p>
              Transposition of the great arteries results from abnormal development and
              orientation of the aorticopulmonary septum and outflow tract.
            </p>

            <p>
              The aorta becomes connected predominantly with the right ventricle while
              the pulmonary artery becomes connected predominantly with the left ventricle.
            </p>

            <p>
              Survival after birth depends on adequate mixing between the pulmonary and
              systemic circulations until corrective intervention is performed.
            </p>

            <h3>80. Persistent Truncus Arteriosus</h3>

            <p>
              Persistent truncus arteriosus occurs when the embryonic outflow tract fails
              to divide properly into separate aortic and pulmonary channels.
            </p>

            <p>
              A single arterial trunk therefore supplies both systemic and pulmonary
              circulations.
            </p>

            <h3>81. Total Anomalous Pulmonary Venous Connection</h3>

            <p>
              Total anomalous pulmonary venous connection occurs when the pulmonary veins
              fail to establish or maintain their normal connection with the left atrium.
            </p>

            <p>
              Pulmonary venous blood instead drains into the systemic venous circulation
              through abnormal pathways.
            </p>

            <h3>82. Ebstein Anomaly</h3>

            <p>
              Ebstein anomaly is a congenital malformation of the tricuspid valve in which
              the valve leaflets are displaced abnormally toward the ventricular cavity.
            </p>

            <p>
              This alters right-sided cardiac anatomy and can produce significant tricuspid
              regurgitation.
            </p>

            <h3>83. Bicuspid Aortic Valve</h3>

            <p>
              A bicuspid aortic valve has two functional cusps instead of the normal three.
            </p>

            <p>
              It can predispose to progressive valvular dysfunction and abnormalities of
              the ascending aorta.
            </p>

            <h3>84. Dextrocardia</h3>

            <p>
              Dextrocardia occurs when the heart is positioned predominantly on the right
              side of the thorax.
            </p>

            <p>
              It can result from abnormal cardiac looping and may occur as an isolated
              finding or in association with other developmental abnormalities.
            </p>

            <h3>85. Heterotaxy</h3>

            <p>
              Heterotaxy refers to abnormal arrangement of thoracic and abdominal organs
              associated with disturbances of left-right embryonic patterning.
            </p>

            <p>
              It may be associated with complex congenital cardiac malformations.
            </p>

            <h3>86. Molecular Regulation of Cardiac Development</h3>

            <p>
              Cardiac development is controlled by complex interactions between transcription
              factors, signaling pathways, extracellular matrix components, and environmental
              signals.
            </p>

            <p>
              Important regulatory factors include:
            </p>

            <ul>
              <li>NKX2-5</li>
              <li>GATA4</li>
              <li>TBX5</li>
              <li>MEF2 family transcription factors</li>
              <li>HAND family proteins</li>
              <li>NOTCH signaling</li>
              <li>WNT signaling</li>
              <li>FGF signaling</li>
              <li>Bone morphogenetic protein signaling</li>
              <li>Retinoic acid signaling</li>
            </ul>

            <h3>87. NKX2-5</h3>

            <p>
              NKX2-5 is a major cardiac transcription factor involved in specification
              and development of cardiac progenitor cells.
            </p>

            <p>
              Abnormalities involving NKX2-5 have been associated with congenital cardiac
              defects and conduction abnormalities.
            </p>

            <h3>88. GATA4</h3>

            <p>
              GATA4 participates in regulation of genes involved in cardiac development,
              myocardial differentiation, and septation.
            </p>

            <p>
              Abnormal GATA4 function can interfere with normal formation of cardiac
              structures.
            </p>

            <h3>89. TBX5</h3>

            <p>
              TBX5 is important in cardiac chamber development and septation.
            </p>

            <p>
              Pathogenic variants involving TBX5 are associated with
              <strong>Holt-Oram syndrome</strong>, which combines upper-limb abnormalities
              with congenital heart disease.
            </p>

            <h3>90. Left-Right Patterning</h3>

            <p>
              Normal cardiac development requires establishment of the embryo's left-right
              axis.
            </p>

            <p>
              Disturbances in left-right patterning can alter cardiac looping, chamber
              arrangement, venous development, and great vessel orientation.
            </p>

            <h3>91. Timing of Cardiac Development</h3>

            <p>
              Major cardiac developmental events occur during the first several weeks of
              embryogenesis.
            </p>

            <ul>
              <li>
                <strong>Week 3:</strong> cardiogenic mesoderm and early heart tube formation.
              </li>
              <li>
                <strong>Early week 4:</strong> cardiac looping and rapid structural remodeling.
              </li>
              <li>
                <strong>Weeks 4–8:</strong> major chamber formation, septation, valve
                development, and outflow tract remodeling.
              </li>
              <li>
                <strong>Fetal period:</strong> continued growth and maturation of the
                cardiovascular system.
              </li>
            </ul>

            <h3>92. First Heartbeat</h3>

            <p>
              The primitive heart begins rhythmic contractions very early in embryonic
              development, around the fourth week of development when dated from the last
              menstrual period, corresponding approximately to the third week after
              fertilization.
            </p>

            <p>
              This makes the heart one of the earliest functional organs of the developing
              embryo.
            </p>

            <h3>93. Embryonic Circulation</h3>

            <p>
              As the heart begins beating, it establishes circulation through the embryo
              and extraembryonic tissues.
            </p>

            <p>
              Early circulation supports delivery of oxygen and nutrients and removal of
              metabolic waste as embryonic growth increases.
            </p>

            <h3>94. Fetal-to-Neonatal Circulatory Transition</h3>

            <p>
              The fetal cardiovascular system is specifically adapted to placental oxygenation.
              After birth, removal of the placenta and expansion of the lungs fundamentally
              change vascular resistance and blood flow patterns.
            </p>

            <p>
              The major transitional events include:
            </p>

            <ul>
              <li>Loss of placental circulation</li>
              <li>Increase in systemic vascular resistance</li>
              <li>Lung expansion</li>
              <li>Reduction in pulmonary vascular resistance</li>
              <li>Increased pulmonary venous return</li>
              <li>Functional closure of the foramen ovale</li>
              <li>Closure of the ductus arteriosus</li>
              <li>Closure of the ductus venosus</li>
            </ul>

            <h3>95. Developmental Summary</h3>

            <p>
              The heart develops from mesoderm-derived cardiac progenitor cells within the
              cardiogenic region. Paired endocardial tubes form and fuse during embryonic
              folding to produce the primitive heart tube.
            </p>

            <p>
              The primitive tube undergoes rightward looping and becomes regionalized into
              the truncus arteriosus, bulbus cordis, primitive ventricle, primitive atrium,
              and sinus venosus.
            </p>

            <p>
              Subsequent septation divides the developing heart into right and left chambers,
              while endocardial cushions contribute to atrioventricular septation and valve
              formation. The conotruncal region is remodeled to separate the systemic and
              pulmonary outflow pathways.
            </p>

            <p>
              The right and left ventricles develop from different embryonic regions, while
              remodeling of the sinus venosus and pulmonary venous system contributes to
              formation of the mature atria.
            </p>

            <p>
              During fetal life, the foramen ovale, ductus arteriosus, and ductus venosus
              allow blood to bypass the lungs and partially bypass the liver. At birth,
              respiratory and circulatory changes cause these fetal pathways to close and
              establish the mature pattern of pulmonary and systemic circulation.
            </p>

            <p>
              Abnormalities during cardiac looping, septation, endocardial cushion formation,
              conotruncal development, valve formation, venous remodeling, or molecular
              regulation can result in congenital heart disease.
            </p>

            <h3>96. Major Embryological Derivatives of the Heart</h3>

            <table>
              <thead>
                <tr>
                  <th>Embryonic Structure</th>
                  <th>Major Adult Derivatives</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Primitive atrium</td>
                  <td>Trabeculated portions of right and left atria</td>
                </tr>
                <tr>
                  <td>Right horn of sinus venosus</td>
                  <td>Smooth part of right atrium</td>
                </tr>
                <tr>
                  <td>Left horn of sinus venosus</td>
                  <td>Coronary sinus and oblique vein of left atrium</td>
                </tr>
                <tr>
                  <td>Primitive ventricle</td>
                  <td>Major trabeculated portion of left ventricle</td>
                </tr>
                <tr>
                  <td>Bulbus cordis</td>
                  <td>Major portions of ventricular outflow pathways, especially right ventricular outflow</td>
                </tr>
                <tr>
                  <td>Truncus arteriosus</td>
                  <td>Proximal ascending aorta and pulmonary trunk</td>
                </tr>
                <tr>
                  <td>Endocardial cushions</td>
                  <td>Atrioventricular septation, valve components and membranous septum</td>
                </tr>
                <tr>
                  <td>Common pulmonary vein</td>
                  <td>Smooth posterior wall of left atrium and pulmonary venous connections</td>
                </tr>
                <tr>
                  <td>Septum primum</td>
                  <td>Major component of interatrial septal complex</td>
                </tr>
                <tr>
                  <td>Septum secundum</td>
                  <td>Forms major portion of interatrial septal complex surrounding the foramen ovale</td>
                </tr>
              </tbody>
            </table>

            <h3>97. Major Fetal Circulatory Structures and Adult Remnants</h3>

            <table>
              <thead>
                <tr>
                  <th>Fetal Structure</th>
                  <th>Function in Fetal Life</th>
                  <th>Adult Remnant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Foramen ovale</td>
                  <td>Right-to-left atrial shunt</td>
                  <td>Fossa ovalis</td>
                </tr>
                <tr>
                  <td>Ductus arteriosus</td>
                  <td>Shunts pulmonary trunk blood toward aorta</td>
                  <td>Ligamentum arteriosum</td>
                </tr>
                <tr>
                  <td>Ductus venosus</td>
                  <td>Allows umbilical venous blood to bypass much of the liver</td>
                  <td>Ligamentum venosum</td>
                </tr>
                <tr>
                  <td>Umbilical vein</td>
                  <td>Carries oxygenated blood from placenta</td>
                  <td>Ligamentum teres hepatis</td>
                </tr>
                <tr>
                  <td>Umbilical arteries</td>
                  <td>Return fetal blood to placenta</td>
                  <td>Medial umbilical ligaments</td>
                </tr>
              </tbody>
            </table>

            <h3>98. Clinical Importance of Heart Embryology</h3>

            <p>
              Understanding cardiac embryology is essential for interpreting congenital heart
              disease. The adult heart is the result of extensive remodeling rather than
              simple growth of the primitive heart tube.
            </p>

            <p>
              Developmental errors can therefore produce abnormalities in chamber position,
              septation, valve structure, venous return, ventricular outflow, great artery
              relationships, or electrical conduction.
            </p>

            <p>
              Knowledge of the embryological origin of each cardiac structure provides a
              framework for understanding congenital abnormalities such as atrial septal
              defects, ventricular septal defects, atrioventricular septal defects,
              patent ductus arteriosus, tetralogy of Fallot, transposition of the great
              arteries, persistent truncus arteriosus, coarctation of the aorta, and
              anomalous pulmonary venous connections.
            </p>
          `,
        keyFacts: `
          <h2>High-Yield Heart Facts</h2>

          <ul>
            <li>The heart is a four-chambered muscular pump.</li>
            <li>The right side pumps blood through the pulmonary circulation.</li>
            <li>The left side pumps blood through the systemic circulation.</li>
            <li>The mitral valve lies between the left atrium and left ventricle.</li>
            <li>The tricuspid valve lies between the right atrium and right ventricle.</li>
            <li>The aortic valve controls flow from the left ventricle into the aorta.</li>
            <li>The pulmonary valve controls flow from the right ventricle into the pulmonary trunk.</li>
            <li>The SA node normally acts as the primary cardiac pacemaker.</li>
            <li>The AV node delays conduction before ventricular activation.</li>
            <li>Cardiac output equals heart rate multiplied by stroke volume.</li>
            <li>Coronary arteries arise from the ascending aorta.</li>
            <li>Cardiac troponins are important biomarkers of myocardial injury.</li>
          </ul>
        `
      },

      // ============================================================
      // HEART PARTS
      // ============================================================

      parts: [

        {
          id: "right-atrium",
          name: "Right Atrium",
          modelPath: "models/heart/",
          modelFile: "right_atrium.glb",

          notes: {
            anatomy: `
              <h2>Right Atrium</h2>
              <p>
                The right atrium forms the right superior portion of the heart and receives
                deoxygenated blood from the superior vena cava, inferior vena cava and coronary sinus.
              </p>

              <h3>Important Structures</h3>
              <ul>
                <li>Superior vena cava</li>
                <li>Inferior vena cava</li>
                <li>Coronary sinus</li>
                <li>Right atrial appendage</li>
                <li>Crista terminalis</li>
                <li>Pectinate muscles</li>
                <li>Interatrial septum</li>
                <li>Fossa ovalis</li>
              </ul>
            `,

            physiology: `
              <h2>Right Atrium Physiology</h2>
              <p>
                The right atrium receives systemic venous blood and transfers it to the right ventricle
                through the tricuspid valve.
              </p>

              <p>
                The sinoatrial node is located in the right atrial wall near the junction of the
                superior vena cava and right atrium.
              </p>
            `,

            clinical: `
              <h2>Right Atrium Clinical Correlations</h2>
              <ul>
                <li>Right atrial enlargement may occur with chronic right-sided pressure or volume overload.</li>
                <li>Central venous pressure reflects pressure within the right atrial system.</li>
                <li>Abnormal atrial rhythms may originate from the right atrium.</li>
              </ul>
            `
          }
        },

        {
          id: "right-ventricle",
          name: "Right Ventricle",
          modelPath: "models/heart/",
          modelFile: "right_ventricle.glb",

          notes: {
            anatomy: `
              <h2>Right Ventricle</h2>

              <p>
                The right ventricle receives blood from the right atrium through the tricuspid valve
                and pumps it through the pulmonary valve into the pulmonary trunk.
              </p>

              <h3>Important Structures</h3>
              <ul>
                <li>Tricuspid valve</li>
                <li>Papillary muscles</li>
                <li>Chordae tendineae</li>
                <li>Trabeculae carneae</li>
                <li>Interventricular septum</li>
                <li>Moderator band</li>
                <li>Infundibulum</li>
                <li>Pulmonary valve</li>
              </ul>
            `,

            physiology: `
              <h2>Right Ventricle Physiology</h2>
              <p>
                The right ventricle generates the pressure required to move blood through the
                relatively low-resistance pulmonary circulation.
              </p>
            `,

            clinical: `
              <h2>Right Ventricle Clinical Correlations</h2>
              <ul>
                <li>Right ventricular failure may cause systemic venous congestion and peripheral edema.</li>
                <li>Pulmonary hypertension increases right ventricular afterload.</li>
                <li>Right ventricular infarction can impair filling and cardiac output.</li>
              </ul>
            `
          }
        },

        {
          id: "left-atrium",
          name: "Left Atrium",
          modelPath: "models/heart/",
          modelFile: "left_atrium.glb",

          notes: {
            anatomy: `
              <h2>Left Atrium</h2>

              <p>
                The left atrium receives oxygenated blood from the pulmonary veins and transfers it
                to the left ventricle through the mitral valve.
              </p>

              <h3>Important Structures</h3>
              <ul>
                <li>Four pulmonary veins typically enter the left atrium.</li>
                <li>Left atrial appendage</li>
                <li>Mitral valve</li>
                <li>Interatrial septum</li>
              </ul>
            `,

            physiology: `
              <h2>Left Atrium Physiology</h2>
              <p>
                The left atrium acts as a reservoir, conduit and contractile chamber contributing
                to left ventricular filling.
              </p>
            `,

            clinical: `
              <h2>Left Atrium Clinical Correlations</h2>
              <ul>
                <li>Left atrial enlargement is associated with chronic pressure or volume overload.</li>
                <li>Atrial fibrillation commonly originates from electrical activity involving the atria, particularly around the pulmonary veins.</li>
                <li>Blood stasis in the left atrial appendage increases thromboembolic risk in atrial fibrillation.</li>
              </ul>
            `
          }
        },

        {
          id: "left-ventricle",
          name: "Left Ventricle",
          modelPath: "models/heart/",
          modelFile: "left_ventricle.glb",

          notes: {
            anatomy: `
              <h2>Left Ventricle</h2>

              <p>
                The left ventricle is the thickest-walled chamber of the heart. It receives oxygenated
                blood from the left atrium and ejects it through the aortic valve into the aorta.
              </p>

              <h3>Important Structures</h3>
              <ul>
                <li>Mitral valve</li>
                <li>Papillary muscles</li>
                <li>Chordae tendineae</li>
                <li>Trabeculae carneae</li>
                <li>Interventricular septum</li>
                <li>Aortic valve</li>
                <li>Left ventricular outflow tract</li>
              </ul>
            `,

            physiology: `
              <h2>Left Ventricle Physiology</h2>

              <p>
                The left ventricle generates the pressure required to perfuse the systemic circulation.
                Its thick myocardium allows it to generate substantially greater pressure than the
                right ventricle.
              </p>

              <p>
                Left ventricular function is a major determinant of systemic cardiac output and
                arterial pressure.
              </p>
            `,

            pathology: `
              <h2>Left Ventricle Pathology</h2>

              <ul>
                <li>Left ventricular hypertrophy may result from chronic pressure overload.</li>
                <li>Left ventricular dilation may occur with chronic volume overload or systolic dysfunction.</li>
                <li>Left ventricular failure can produce pulmonary venous congestion and pulmonary edema.</li>
                <li>Myocardial infarction may cause regional or global impairment of ventricular function.</li>
              </ul>
            `
          }
        },

        {
          id: "mitral-valve",
          name: "Mitral Valve",
          modelPath: "models/heart/",
          modelFile: "heart_mitral_valve.glb",

          notes: {
            anatomy: `
              <h2>Mitral Valve</h2>

              <p>
                The mitral valve is the left atrioventricular valve located between the left atrium
                and left ventricle.
              </p>

              <h3>Components</h3>
              <ul>
                <li>Anterior leaflet</li>
                <li>Posterior leaflet</li>
                <li>Chordae tendineae</li>
                <li>Anterior papillary muscle</li>
                <li>Posterior papillary muscle</li>
                <li>Mitral annulus</li>
              </ul>
            `,

            physiology: `
              <h2>Mitral Valve Physiology</h2>

              <p>
                The valve opens during ventricular diastole to allow blood to move from the left
                atrium into the left ventricle. It closes during ventricular systole to prevent
                regurgitation into the atrium.
              </p>
            `,

            pathology: `
              <h2>Mitral Valve Pathology</h2>

              <h3>Mitral Stenosis</h3>
              <p>
                Narrowing of the mitral valve obstructs blood flow from the left atrium to the
                left ventricle and increases left atrial pressure.
              </p>

              <h3>Mitral Regurgitation</h3>
              <p>
                Incomplete valve closure allows blood to flow backward into the left atrium during
                ventricular systole.
              </p>
            `
          }
        },

        {
          id: "tricuspid-valve",
          name: "Tricuspid Valve",
          modelPath: "models/heart/",
          modelFile: "tricuspid_valve.glb",

          notes: {
            anatomy: `
              <h2>Tricuspid Valve</h2>
              <p>
                The tricuspid valve is the right atrioventricular valve located between the right
                atrium and right ventricle.
              </p>

              <p>
                It has anterior, posterior and septal leaflets supported by chordae tendineae and
                papillary muscles.
              </p>
            `,

            physiology: `
              <p>
                The tricuspid valve permits blood flow from the right atrium into the right ventricle
                during diastole and prevents significant regurgitation during ventricular systole.
              </p>
            `,

            pathology: `
              <p>
                Tricuspid stenosis is uncommon. Tricuspid regurgitation is more common and may occur
                because of annular dilation, right ventricular enlargement, infective endocarditis
                or structural valve disease.
              </p>
            `
          }
        },

        {
          id: "aortic-valve",
          name: "Aortic Valve",
          modelPath: "models/heart/",
          modelFile: "aortic_valve.glb",

          notes: {
            anatomy: `
              <h2>Aortic Valve</h2>
              <p>
                The aortic valve is a semilunar valve located between the left ventricle and ascending
                aorta. It normally has three cusps.
              </p>
            `,

            physiology: `
              <p>
                The valve opens during ventricular systole, allowing blood to enter the aorta.
                It closes during diastole to prevent significant backward flow into the left ventricle.
              </p>
            `,

            pathology: `
              <h2>Aortic Valve Disease</h2>

              <h3>Aortic Stenosis</h3>
              <p>
                Aortic stenosis obstructs left ventricular outflow and increases ventricular afterload.
              </p>

              <h3>Aortic Regurgitation</h3>
              <p>
                Aortic regurgitation permits blood to return from the aorta into the left ventricle
                during diastole.
              </p>
            `
          }
        },

        {
          id: "pulmonary-valve",
          name: "Pulmonary Valve",
          modelPath: "models/heart/",
          modelFile: "pulmonary_valve.glb",

          notes: {
            anatomy: `
              <h2>Pulmonary Valve</h2>
              <p>
                The pulmonary valve is a semilunar valve located between the right ventricle and
                pulmonary trunk.
              </p>
            `,

            physiology: `
              <p>
                It opens during right ventricular systole to permit blood to enter the pulmonary
                trunk and closes during diastole to prevent significant pulmonary arterial blood
                from returning to the right ventricle.
              </p>
            `,

            pathology: `
              <p>
                Pulmonary valve stenosis obstructs right ventricular outflow, while pulmonary
                regurgitation permits backward blood flow into the right ventricle.
              </p>
            `
          }
        },

        {
          id: "coronary-arteries",
          name: "Coronary Arteries",
          modelPath: "models/heart/",
          modelFile: "coronary_arteries.glb",

          notes: {
            anatomy: `
              <h2>Coronary Arteries</h2>

              <p>
                The coronary arteries arise from the aortic root and provide oxygenated blood to
                the myocardium.
              </p>

              <h3>Right Coronary Artery</h3>
              <p>
                The right coronary artery travels within the right atrioventricular groove and gives
                rise to branches supplying portions of the right atrium, right ventricle and conduction
                system.
              </p>

              <h3>Left Coronary Artery</h3>
              <p>
                The left coronary artery has a short main trunk that commonly divides into the
                anterior interventricular artery and circumflex artery.
              </p>

              <h3>Major Branches</h3>
              <ul>
                <li>Anterior interventricular artery</li>
                <li>Circumflex artery</li>
                <li>Right marginal artery</li>
                <li>Posterior interventricular artery in right-dominant circulation</li>
              </ul>
            `,

            physiology: `
              <p>
                Coronary blood flow is closely related to myocardial oxygen demand. Much of left
                coronary perfusion occurs during ventricular diastole because systolic contraction
                compresses intramyocardial vessels.
              </p>
            `,

            pathology: `
              <p>
                Atherosclerotic narrowing or acute thrombosis of coronary arteries can produce
                myocardial ischemia and infarction.
              </p>
            `
          }
        }
      ]
    },


    // ============================================================
    // BLOOD VESSELS
    // ============================================================
    {
      id: "blood-vessels",
      name: "Blood Vessels",
      modelPath: "models/blood-vessels/",
      modelFile: "blood-vessels.glb",

      notes: {

        anatomy: `
          <h2>Blood Vessel Anatomy</h2>

          <h3>Overview</h3>
          <p>
            Blood vessels are tubular structures that transport blood throughout the body. They form
            a continuous vascular network connecting the heart with tissues and returning blood to
            the heart.
          </p>

          <h3>Major Types</h3>
          <ul>
            <li><strong>Arteries</strong> – carry blood away from the heart.</li>
            <li><strong>Arterioles</strong> – small arteries that regulate blood flow into capillary beds.</li>
            <li><strong>Capillaries</strong> – microscopic vessels where most exchange occurs.</li>
            <li><strong>Venules</strong> – collect blood from capillary beds.</li>
            <li><strong>Veins</strong> – return blood toward the heart.</li>
          </ul>

          <h3>Layers of Blood Vessel Walls</h3>
          <ol>
            <li><strong>Tunica intima</strong> – inner endothelial layer and associated connective tissue.</li>
            <li><strong>Tunica media</strong> – smooth muscle and elastic tissue.</li>
            <li><strong>Tunica adventitia</strong> – outer connective-tissue layer.</li>
          </ol>

          <h3>Arteries</h3>
          <p>
            Arteries generally have thick walls capable of withstanding relatively high intravascular
            pressure.
          </p>

          <h3>Veins</h3>
          <p>
            Veins generally have thinner walls and larger lumens than comparable arteries. Many
            medium-sized veins contain valves that reduce retrograde blood flow.
          </p>

          <h3>Capillaries</h3>
          <p>
            Capillaries have extremely thin walls, generally consisting of endothelial cells and
            their basement membrane, allowing efficient exchange between blood and tissues.
          </p>
        `,

        physiology: `
          <h2>Blood Vessel Physiology</h2>

          <h3>Blood Flow</h3>
          <p>
            Blood flows down pressure gradients. The cardiovascular system maintains pressure
            differences between the arterial and venous compartments.
          </p>

          <h3>Vascular Resistance</h3>
          <p>
            Arterioles are major resistance vessels. Changes in arteriolar diameter strongly influence
            systemic vascular resistance and tissue perfusion.
          </p>

          <h3>Vasoconstriction</h3>
          <p>
            Vasoconstriction decreases vessel diameter and generally increases vascular resistance.
          </p>

          <h3>Vasodilation</h3>
          <p>
            Vasodilation increases vessel diameter and generally decreases vascular resistance.
          </p>

          <h3>Blood Pressure</h3>
          <p>
            Arterial blood pressure is influenced by cardiac output, systemic vascular resistance,
            blood volume and arterial compliance.
          </p>

          <p>
            <strong>Mean arterial pressure is approximately related to cardiac output × systemic
            vascular resistance.</strong>
          </p>

          <h3>Venous Return</h3>
          <p>
            Venous return is assisted by skeletal muscle contraction, respiratory movements, venous
            valves and sympathetic venoconstriction.
          </p>

          <h3>Capillary Exchange</h3>
          <p>
            Exchange of gases, nutrients, metabolic products and fluid occurs between capillary blood
            and surrounding tissues.
          </p>

          <h3>Endothelial Regulation</h3>
          <p>
            Endothelial cells participate actively in regulation of vascular tone, coagulation,
            inflammation, permeability and vascular remodeling.
          </p>
        `,

        biochemistry: `
          <h2>Blood Vessel Biochemistry</h2>

          <h3>Nitric Oxide</h3>
          <p>
            Endothelial nitric oxide synthase produces nitric oxide from L-arginine. Nitric oxide
            diffuses into vascular smooth muscle and promotes relaxation through the cyclic GMP pathway.
          </p>

          <h3>Endothelin</h3>
          <p>
            Endothelin is a potent vasoconstrictor peptide produced by endothelial cells.
          </p>

          <h3>Angiotensin II</h3>
          <p>
            Angiotensin II is a potent vasoconstrictor and contributes to blood pressure regulation
            and aldosterone secretion.
          </p>

          <h3>Prostacyclin</h3>
          <p>
            Prostacyclin produced by endothelial cells promotes vasodilation and inhibits platelet
            aggregation.
          </p>

          <h3>Coagulation</h3>
          <p>
            The vascular endothelium participates in maintaining the balance between procoagulant
            and anticoagulant mechanisms.
          </p>
        `,

        pathology: `
          <h2>Blood Vessel Pathology</h2>

          <h3>Atherosclerosis</h3>
          <p>
            Atherosclerosis is a chronic disease of large and medium-sized arteries characterized by
            lipid accumulation, inflammation, fibrous tissue formation and plaque development within
            the arterial wall.
          </p>

          <h3>Hypertension</h3>
          <p>
            Persistent elevation of arterial pressure increases mechanical stress on blood vessel
            walls and contributes to cardiovascular, renal and cerebrovascular disease.
          </p>

          <h3>Aneurysm</h3>
          <p>
            An aneurysm is an abnormal localized dilation of a blood vessel or cardiac chamber.
            Aneurysms may enlarge, thrombose or rupture depending on their location and characteristics.
          </p>

          <h3>Deep Vein Thrombosis</h3>
          <p>
            Deep vein thrombosis involves formation of a thrombus within a deep vein, commonly in
            the lower extremities. A thrombus may embolize to the pulmonary circulation.
          </p>

          <h3>Peripheral Arterial Disease</h3>
          <p>
            Peripheral arterial disease commonly results from atherosclerotic narrowing of arteries
            supplying the limbs and can produce exertional limb pain and impaired tissue perfusion.
          </p>

          <h3>Varicose Veins</h3>
          <p>
            Varicose veins are dilated, tortuous superficial veins commonly associated with chronic
            venous hypertension and valve dysfunction.
          </p>
        `,

        microbiology: `
          <h2>Blood Vessel Microbiology</h2>

          <h3>Vascular Infection</h3>
          <p>
            Microorganisms can infect vascular structures directly or produce vascular complications
            through bloodstream infection and inflammation.
          </p>

          <h3>Septic Emboli</h3>
          <p>
            Infective endocarditis may produce infected emboli that travel through the arterial
            circulation and cause vascular occlusion and tissue infection.
          </p>

          <h3>Infectious Aortitis</h3>
          <p>
            Certain bacterial infections can cause inflammation and destruction of the aortic wall,
            potentially resulting in aneurysm formation or rupture.
          </p>
        `,

        immunology: `
          <h2>Blood Vessel Immunology</h2>

          <p>
            The vascular endothelium actively participates in immune regulation and inflammation.
            Cytokines and inflammatory mediators can alter endothelial permeability, leukocyte
            adhesion and vascular tone.
          </p>

          <h3>Endothelial Activation</h3>
          <p>
            During inflammation, endothelial cells increase expression of adhesion molecules that
            facilitate recruitment of leukocytes into tissues.
          </p>

          <h3>Vasculitis</h3>
          <p>
            Vasculitis refers to inflammation of blood vessel walls. It may involve vessels of
            different sizes and can produce ischemia, thrombosis, hemorrhage or aneurysmal changes.
          </p>
        `,

        pharmacology: `
          <h2>Blood Vessel Pharmacology</h2>

          <h3>Vasodilators</h3>
          <ul>
            <li>Nitrates</li>
            <li>Calcium-channel blockers</li>
            <li>Hydralazine</li>
            <li>Selected ACE inhibitors and ARBs through effects on vascular signaling</li>
          </ul>

          <h3>Vasoconstrictors</h3>
          <p>
            Certain drugs stimulate vascular smooth muscle contraction and are used in selected
            clinical situations to increase vascular tone and blood pressure.
          </p>

          <h3>Antiplatelet Drugs</h3>
          <p>
            Antiplatelet agents reduce platelet activation and aggregation and are important in
            prevention and treatment of arterial thrombotic disease.
          </p>

          <h3>Anticoagulants</h3>
          <p>
            Anticoagulants interfere with coagulation pathways and reduce formation or extension
            of thrombi.
          </p>
        `,

        clinical: `
          <h2>Clinical Blood Vessel Correlations</h2>

          <h3>Blood Pressure Measurement</h3>
          <p>
            Blood pressure is commonly measured non-invasively using a cuff around the upper arm.
            Systolic pressure corresponds approximately to peak arterial pressure during ventricular
            systole, while diastolic pressure reflects arterial pressure during ventricular diastole.
          </p>

          <h3>Pulse</h3>
          <p>
            Arterial pulse reflects pressure waves generated by ventricular contraction and transmitted
            through the arterial tree.
          </p>

          <h3>Peripheral Perfusion</h3>
          <p>
            Peripheral perfusion can be assessed clinically through skin temperature, capillary
            refill, peripheral pulses, colour and other findings.
          </p>

          <h3>Thromboembolism</h3>
          <p>
            A thrombus may obstruct blood flow locally or embolize to another vascular bed. Venous
            thromboembolism can result in pulmonary embolism, while arterial emboli can cause ischemia
            of organs or limbs.
          </p>
        `,

        histology: `
          <h2>Blood Vessel Histology</h2>

          <h3>Endothelium</h3>
          <p>
            The endothelium is a specialized simple squamous epithelium lining the interior of blood
            vessels. It regulates permeability, vascular tone, inflammation and haemostasis.
          </p>

          <h3>Tunica Intima</h3>
          <p>
            The tunica intima contains the endothelial lining and underlying connective tissue.
          </p>

          <h3>Tunica Media</h3>
          <p>
            The tunica media contains vascular smooth muscle and elastic components and is particularly
            prominent in arteries.
          </p>

          <h3>Tunica Adventitia</h3>
          <p>
            The adventitia is composed predominantly of connective tissue and provides structural
            support and anchoring.
          </p>

          <h3>Capillary Types</h3>
          <ul>
            <li><strong>Continuous capillaries</strong> – relatively uninterrupted endothelial lining.</li>
            <li><strong>Fenestrated capillaries</strong> – contain specialized pores and are common in tissues requiring increased exchange.</li>
            <li><strong>Sinusoidal capillaries</strong> – have larger openings and greater permeability.</li>
          </ul>
        `,

        embryology: `
          <h2>Blood Vessel Embryology</h2>

          <p>
            Blood vessels develop primarily from mesoderm through processes involving vasculogenesis
            and angiogenesis.
          </p>

          <h3>Vasculogenesis</h3>
          <p>
            New vascular structures arise from endothelial precursor cells during early development.
          </p>

          <h3>Angiogenesis</h3>
          <p>
            New vessels develop from pre-existing vessels through endothelial sprouting and remodeling.
          </p>

          <h3>Fetal Circulation</h3>
          <p>
            The fetal circulation is adapted to exchange gases and nutrients through the placenta
            rather than the fetal lungs.
          </p>
        `,

        keyFacts: `
          <h2>High-Yield Blood Vessel Facts</h2>

          <ul>
            <li>Arteries carry blood away from the heart.</li>
            <li>Veins return blood toward the heart.</li>
            <li>Capillaries are the principal sites of exchange.</li>
            <li>Arterioles are major resistance vessels.</li>
            <li>Veins act as important capacitance vessels.</li>
            <li>The endothelium regulates vascular tone and permeability.</li>
            <li>Nitric oxide promotes vasodilation.</li>
            <li>Endothelin promotes vasoconstriction.</li>
            <li>Atherosclerosis primarily affects large and medium-sized arteries.</li>
            <li>Deep vein thrombosis can lead to pulmonary embolism.</li>
            <li>Systemic vascular resistance is strongly influenced by arteriolar diameter.</li>
          </ul>
        `
      },

      // ============================================================
      // BLOOD VESSEL PARTS
      // ============================================================

      parts: [

        {
          id: "arteries",
          name: "Arteries",
          modelPath: "models/blood-vessels/",
          modelFile: "artery.glb",

          notes: {
            anatomy: `
              <h2>Arteries</h2>
              <p>
                Arteries are blood vessels that carry blood away from the heart. Most systemic
                arteries carry oxygenated blood, while the pulmonary arteries carry deoxygenated blood.
              </p>

              <h3>Types</h3>
              <ul>
                <li>Elastic arteries</li>
                <li>Muscular arteries</li>
                <li>Arterioles</li>
              </ul>

              <h3>Examples</h3>
              <ul>
                <li>Aorta</li>
                <li>Carotid arteries</li>
                <li>Subclavian arteries</li>
                <li>Coronary arteries</li>
                <li>Renal arteries</li>
                <li>Femoral arteries</li>
              </ul>
            `,

            physiology: `
              <p>
                Elastic arteries buffer the pulsatile output of the heart, while muscular arteries
                distribute blood to organs. Arterioles regulate local resistance and tissue perfusion.
              </p>
            `,

            pathology: `
              <ul>
                <li>Atherosclerosis</li>
                <li>Aneurysm</li>
                <li>Arterial thrombosis</li>
                <li>Peripheral arterial disease</li>
                <li>Vasculitis</li>
              </ul>
            `
          }
        },

        {
          id: "veins",
          name: "Veins",
          modelPath: "models/blood-vessels/",
          modelFile: "vein.glb",

          notes: {
            anatomy: `
              <h2>Veins</h2>
              <p>
                Veins return blood toward the heart. Most systemic veins carry deoxygenated blood,
                while pulmonary veins carry oxygenated blood.
              </p>

              <h3>Examples</h3>
              <ul>
                <li>Superior vena cava</li>
                <li>Inferior vena cava</li>
                <li>Jugular veins</li>
                <li>Subclavian veins</li>
                <li>Femoral veins</li>
                <li>Pulmonary veins</li>
              </ul>
            `,

            physiology: `
              <p>
                Veins operate under relatively low pressure and serve as major blood reservoirs.
                Venous return is assisted by skeletal muscle contraction, respiratory movements and
                venous valves.
              </p>
            `,

            pathology: `
              <ul>
                <li>Deep vein thrombosis</li>
                <li>Varicose veins</li>
                <li>Chronic venous insufficiency</li>
                <li>Venous ulcers</li>
              </ul>
            `
          }
        },

        {
          id: "capillaries",
          name: "Capillaries",
          modelPath: "models/blood-vessels/",
          modelFile: "capillary.glb",

          notes: {
            anatomy: `
              <h2>Capillaries</h2>

              <p>
                Capillaries are microscopic blood vessels that connect arterioles and venules and
                provide the principal interface between circulating blood and tissues.
              </p>

              <h3>Structure</h3>
              <p>
                Their walls are extremely thin, generally consisting of a single layer of endothelial
                cells supported by a basement membrane.
              </p>

              <h3>Types</h3>
              <ul>
                <li>Continuous</li>
                <li>Fenestrated</li>
                <li>Sinusoidal</li>
              </ul>
            `,

            physiology: `
              <h2>Capillary Physiology</h2>

              <p>
                Capillaries permit exchange of oxygen, carbon dioxide, nutrients, hormones, metabolic
                products and fluid between blood and tissues.
              </p>

              <p>
                Exchange occurs through diffusion, filtration, reabsorption and other transport
                mechanisms depending on the substance and tissue.
              </p>
            `,

            pathology: `
              <h2>Capillary Pathology</h2>

              <p>
                Abnormal capillary permeability contributes to tissue edema, inflammation and
                microvascular injury. Capillary damage is particularly important in diabetes,
                sepsis and systemic inflammatory states.
              </p>
            `
          }
        },

        {
          id: "aorta",
          name: "Aorta",
          modelPath: "models/blood-vessels/",
          modelFile: "aorta.glb",

          notes: {
            anatomy: `
              <h2>Aorta</h2>

              <p>
                The aorta is the largest artery in the body and carries oxygenated blood from the
                left ventricle to the systemic circulation.
              </p>

              <h3>Major Sections</h3>
              <ul>
                <li>Ascending aorta</li>
                <li>Aortic arch</li>
                <li>Descending thoracic aorta</li>
                <li>Abdominal aorta</li>
              </ul>

              <h3>Major Branches of the Aortic Arch</h3>
              <ul>
                <li>Brachiocephalic trunk</li>
                <li>Left common carotid artery</li>
                <li>Left subclavian artery</li>
              </ul>
            `,

            physiology: `
              <p>
                The elastic properties of the aorta allow it to expand during ventricular systole
                and recoil during diastole, helping maintain continuous arterial blood flow.
              </p>
            `,

            pathology: `
              <ul>
                <li>Aortic aneurysm</li>
                <li>Aortic dissection</li>
                <li>Atherosclerosis</li>
                <li>Aortic rupture</li>
                <li>Aortitis</li>
              </ul>
            `
          }
        },

        {
          id: "pulmonary-vessels",
          name: "Pulmonary Vessels",
          modelPath: "models/blood-vessels/",
          modelFile: "pulmonary_vessels.glb",

          notes: {
            anatomy: `
              <h2>Pulmonary Vessels</h2>

              <p>
                The pulmonary circulation transports blood between the right ventricle and lungs.
              </p>

              <ul>
                <li>Pulmonary trunk</li>
                <li>Right pulmonary artery</li>
                <li>Left pulmonary artery</li>
                <li>Pulmonary arterioles</li>
                <li>Pulmonary capillaries</li>
                <li>Pulmonary veins</li>
              </ul>
            `,

            physiology: `
              <p>
                Deoxygenated blood leaves the right ventricle through the pulmonary trunk and reaches
                pulmonary capillaries surrounding the alveoli. Oxygenated blood then returns to the
                left atrium through the pulmonary veins.
              </p>
            `,

            clinical: `
              <h2>Clinical Correlations</h2>

              <ul>
                <li>Pulmonary embolism can obstruct pulmonary arterial blood flow.</li>
                <li>Pulmonary hypertension increases pulmonary vascular resistance.</li>
                <li>Pulmonary edema can impair gas exchange.</li>
              </ul>
            `
          }
        }
      ]
    }
  ]
};