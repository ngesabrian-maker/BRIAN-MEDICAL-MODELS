export const respiratorySystem = {
  id: "respiratory",
  name: "Respiratory System",

  organs: [
    {
      id: "lungs",
      name: "Lungs",
      modelPath: "models/respiratory/",
      modelFile: "lungs.glb",

      notes: {
        anatomy: `
          <h2>Lung Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The lungs are paired organs of the respiratory system located within the thoracic cavity.
            They occupy most of the right and left pleural cavities and are separated from each other
            by the mediastinum. The lungs are responsible primarily for pulmonary gas exchange, in which
            oxygen enters the blood and carbon dioxide is removed from it.
          </p>

          <p>
            Each lung has an apex, base, costal surface, mediastinal surface and diaphragmatic surface.
            The right lung is generally shorter and wider than the left because of the position of the
            liver. The left lung has a cardiac notch and lingula to accommodate the heart.
          </p>

          <h3>Right Lung</h3>
          <p>
            The right lung is divided by the oblique and horizontal fissures into three lobes:
          </p>

          <ul>
            <li><strong>Superior lobe</strong></li>
            <li><strong>Middle lobe</strong></li>
            <li><strong>Inferior lobe</strong></li>
          </ul>

          <h3>Left Lung</h3>
          <p>
            The left lung is divided by an oblique fissure into two lobes:
          </p>

          <ul>
            <li><strong>Superior lobe</strong></li>
            <li><strong>Inferior lobe</strong></li>
          </ul>

          <p>
            The left lung also contains the lingula, which is anatomically and functionally associated
            with the superior lobe.
          </p>

          <h3>Hilum and Root of the Lung</h3>
          <p>
            The hilum is the region on the mediastinal surface where structures enter and leave the lung.
            The root of the lung contains the principal bronchus, pulmonary artery, pulmonary veins,
            bronchial vessels, lymphatic vessels and autonomic nerves.
          </p>

          <h3>Bronchial Tree</h3>
          <p>
            Air passes from the trachea into the right and left main bronchi. These divide into lobar
            bronchi, which supply individual lobes, and then into segmental bronchi supplying
            bronchopulmonary segments.
          </p>

          <ol>
            <li>Trachea</li>
            <li>Main bronchi</li>
            <li>Lobar bronchi</li>
            <li>Segmental bronchi</li>
            <li>Smaller bronchi</li>
            <li>Bronchioles</li>
            <li>Terminal bronchioles</li>
            <li>Respiratory bronchioles</li>
            <li>Alveolar ducts</li>
            <li>Alveolar sacs</li>
            <li>Alveoli</li>
          </ol>

          <h3>Alveoli</h3>
          <p>
            Alveoli are microscopic air sacs where most pulmonary gas exchange occurs. Their extremely
            thin walls place inspired air in close proximity to pulmonary capillary blood.
          </p>

          <h3>Pleura</h3>
          <p>
            Each lung is covered by a serous membrane called the pleura. The visceral pleura adheres
            closely to the lung surface, while the parietal pleura lines the thoracic wall, diaphragm
            and mediastinal structures.
          </p>

          <p>
            Between the visceral and parietal pleura is the pleural cavity, which contains a small amount
            of lubricating fluid. Pleural fluid reduces friction and contributes to mechanical coupling
            between the lungs and thoracic wall.
          </p>

          <h3>Pulmonary Circulation</h3>
          <p>
            The pulmonary arteries carry deoxygenated blood from the right ventricle to the lungs.
            Pulmonary capillaries surround the alveoli and permit gas exchange. Oxygenated blood returns
            to the left atrium through the pulmonary veins.
          </p>

          <h3>Bronchial Circulation</h3>
          <p>
            Bronchial arteries provide systemic arterial blood to the conducting airways and supporting
            tissues of the lungs. Bronchial venous drainage ultimately enters the systemic venous system,
            with some drainage contributing to physiological venous admixture.
          </p>
        `,

        physiology: `
          <h2>Lung Physiology</h2>

          <h3>Primary Functions</h3>
          <ul>
            <li>Oxygen uptake</li>
            <li>Carbon dioxide elimination</li>
            <li>Regulation of acid-base balance</li>
            <li>Phonation through airflow across the larynx</li>
            <li>Participation in metabolism of biologically active substances</li>
            <li>Filtration of small thromboemboli from venous circulation</li>
            <li>Contribution to immune defense</li>
          </ul>

          <h3>Ventilation</h3>
          <p>
            Pulmonary ventilation is the movement of air between the atmosphere and the alveoli.
            Inspiration occurs when expansion of the thoracic cavity produces a pressure gradient that
            draws air into the lungs. Quiet inspiration is primarily produced by contraction of the
            diaphragm.
          </p>

          <p>
            During quiet expiration, relaxation of the inspiratory muscles and elastic recoil of the
            lungs and chest wall drive air out of the lungs.
          </p>

          <h3>Diaphragm</h3>
          <p>
            The diaphragm is the principal muscle of quiet inspiration. When it contracts, it moves
            inferiorly, increasing thoracic volume and reducing intrathoracic pressure.
          </p>

          <h3>Accessory Muscles</h3>
          <p>
            During increased respiratory demand, accessory muscles of inspiration may assist ventilation.
            Forced expiration involves active contraction of abdominal muscles and internal intercostal
            muscles.
          </p>

          <h3>Gas Exchange</h3>
          <p>
            Oxygen and carbon dioxide cross the respiratory membrane primarily by diffusion. The direction
            of diffusion depends on the respective partial-pressure gradients between alveolar gas and
            pulmonary capillary blood.
          </p>

          <h3>Ventilation-Perfusion Relationship</h3>
          <p>
            Efficient gas exchange requires appropriate matching between alveolar ventilation and pulmonary
            perfusion. Areas receiving ventilation but little blood flow contribute to physiological dead
            space, while areas receiving blood flow but inadequate ventilation contribute to shunt-like
            physiology.
          </p>

          <h3>Dead Space</h3>
          <p>
            Anatomical dead space consists of airways that conduct air but do not directly participate in
            gas exchange. Physiological dead space includes anatomical dead space plus alveolar regions
            that are ventilated but inadequately perfused.
          </p>

          <h3>Lung Volumes</h3>
          <ul>
            <li><strong>Tidal volume:</strong> air moved during a normal quiet breath.</li>
            <li><strong>Inspiratory reserve volume:</strong> additional air that can be inspired after a normal inspiration.</li>
            <li><strong>Expiratory reserve volume:</strong> additional air that can be expired after a normal expiration.</li>
            <li><strong>Residual volume:</strong> air remaining in the lungs after maximal expiration.</li>
          </ul>

          <h3>Lung Capacities</h3>
          <ul>
            <li><strong>Inspiratory capacity:</strong> tidal volume plus inspiratory reserve volume.</li>
            <li><strong>Functional residual capacity:</strong> expiratory reserve volume plus residual volume.</li>
            <li><strong>Vital capacity:</strong> inspiratory reserve volume plus tidal volume plus expiratory reserve volume.</li>
            <li><strong>Total lung capacity:</strong> vital capacity plus residual volume.</li>
          </ul>

          <h3>Compliance</h3>
          <p>
            Lung compliance describes the change in lung volume produced by a given change in transpulmonary
            pressure. Reduced compliance makes lung expansion more difficult, whereas excessive compliance
            may occur when elastic recoil is reduced.
          </p>

          <h3>Surfactant</h3>
          <p>
            Pulmonary surfactant is produced primarily by type II pneumocytes. It reduces alveolar surface
            tension and helps prevent alveolar collapse, particularly during expiration.
          </p>

          <h3>Respiratory Control</h3>
          <p>
            Breathing is controlled by neural networks in the brainstem, particularly within the medulla
            and pons. Chemoreceptors detect changes in carbon dioxide, hydrogen ion concentration and
            oxygen and modify ventilation accordingly.
          </p>

          <h3>Central Chemoreceptors</h3>
          <p>
            Central chemoreceptors respond primarily to changes associated with arterial carbon dioxide
            through changes in hydrogen ion concentration in the brain extracellular fluid.
          </p>

          <h3>Peripheral Chemoreceptors</h3>
          <p>
            Peripheral chemoreceptors in the carotid and aortic bodies respond to changes in arterial
            oxygen, carbon dioxide and hydrogen ion concentration.
          </p>
        `,

        biochemistry: `
          <h2>Respiratory System Biochemistry</h2>

          <h3>Oxygen Transport</h3>
          <p>
            Most oxygen in blood is transported bound reversibly to hemoglobin within red blood cells.
            A smaller fraction is dissolved directly in plasma.
          </p>

          <h3>Hemoglobin</h3>
          <p>
            Hemoglobin is a tetrameric protein containing heme groups with iron capable of reversibly
            binding oxygen. Oxygen binding is cooperative, allowing hemoglobin to load oxygen efficiently
            in the lungs and release it in peripheral tissues.
          </p>

          <h3>Oxygen-Hemoglobin Dissociation Curve</h3>
          <p>
            The oxygen-hemoglobin dissociation curve describes the relationship between oxygen partial
            pressure and hemoglobin oxygen saturation. Increased temperature, increased carbon dioxide,
            increased hydrogen ion concentration and increased 2,3-bisphosphoglycerate generally reduce
            hemoglobin's affinity for oxygen and promote oxygen unloading.
          </p>

          <h3>Carbon Dioxide Transport</h3>
          <p>
            Carbon dioxide is transported in blood in three major forms:
          </p>

          <ul>
            <li>Dissolved carbon dioxide</li>
            <li>Carbamino compounds, particularly carbaminohemoglobin</li>
            <li>Bicarbonate ions</li>
          </ul>

          <h3>Bicarbonate Buffer System</h3>
          <p>
            Carbon dioxide reacts with water to form carbonic acid, which can dissociate into hydrogen ions
            and bicarbonate. Carbonic anhydrase within red blood cells greatly accelerates this reaction.
          </p>

          <p>
            This system links pulmonary ventilation with systemic acid-base regulation. Increased ventilation
            promotes carbon dioxide elimination, while reduced ventilation tends to increase arterial carbon
            dioxide concentration.
          </p>

          <h3>Chloride Shift</h3>
          <p>
            In peripheral tissues, bicarbonate leaves red blood cells in exchange for chloride ions.
            This process helps facilitate carbon dioxide transport in the blood. In pulmonary capillaries,
            the process reverses to facilitate carbon dioxide release.
          </p>

          <h3>Surfactant Biochemistry</h3>
          <p>
            Pulmonary surfactant contains phospholipids and specialized proteins. Dipalmitoylphosphatidylcholine
            is an important surface-active phospholipid. Surfactant reduces the surface tension at the
            air-liquid interface of the alveoli.
          </p>

          <h3>Carbon Monoxide</h3>
          <p>
            Carbon monoxide binds hemoglobin with much greater affinity than oxygen. This reduces the blood's
            effective oxygen-carrying capacity and impairs oxygen unloading to tissues.
          </p>

          <h3>Nitric Oxide</h3>
          <p>
            Nitric oxide produced by endothelial cells contributes to regulation of pulmonary vascular tone.
            It activates soluble guanylate cyclase in vascular smooth muscle, increasing cyclic GMP and
            promoting vasodilation.
          </p>
        `,

        pathology: `
          <h2>Respiratory Pathology</h2>

          <h3>Asthma</h3>
          <p>
            Asthma is a chronic inflammatory airway disorder characterized by variable airflow obstruction,
            bronchial hyperresponsiveness and episodes of wheeze, cough, chest tightness and dyspnea.
            Airflow limitation is often reversible either spontaneously or with treatment.
          </p>

          <h3>Chronic Obstructive Pulmonary Disease</h3>
          <p>
            COPD is characterized by persistent respiratory symptoms and airflow limitation associated with
            abnormalities of the airways and/or alveoli. Major clinical phenotypes include chronic bronchitis
            and emphysema.
          </p>

          <h3>Emphysema</h3>
          <p>
            Emphysema involves destruction of alveolar walls and enlargement of distal airspaces, resulting
            in reduced elastic recoil and impaired gas exchange.
          </p>

          <h3>Chronic Bronchitis</h3>
          <p>
            Chronic bronchitis is clinically defined by chronic productive cough occurring for at least
            three months in each of two consecutive years, after exclusion of other causes.
          </p>

          <h3>Pneumonia</h3>
          <p>
            Pneumonia is infection of the lung parenchyma. It can be caused by bacteria, viruses, fungi
            and other organisms. Alveolar inflammation and fluid accumulation can impair ventilation and
            gas exchange.
          </p>

          <h3>Pulmonary Edema</h3>
          <p>
            Pulmonary edema is accumulation of fluid within the pulmonary interstitium and/or alveoli.
            Cardiogenic pulmonary edema commonly results from increased pulmonary capillary hydrostatic
            pressure, while non-cardiogenic edema may result from increased permeability.
          </p>

          <h3>Pulmonary Embolism</h3>
          <p>
            Pulmonary embolism occurs when an embolus obstructs pulmonary arterial circulation, commonly
            after thrombus formation in the deep veins of the lower limbs. Large emboli can significantly
            impair pulmonary perfusion and right ventricular function.
          </p>

          <h3>Pneumothorax</h3>
          <p>
            Pneumothorax is the presence of air within the pleural cavity. It can disrupt the normal
            negative intrapleural pressure and cause partial or complete lung collapse.
          </p>

          <h3>Pleural Effusion</h3>
          <p>
            Pleural effusion is abnormal accumulation of fluid within the pleural cavity. Causes include
            heart failure, infection, malignancy, inflammatory disease and other systemic conditions.
          </p>

          <h3>Atelectasis</h3>
          <p>
            Atelectasis refers to collapse or incomplete expansion of lung tissue. It may result from
            airway obstruction, compression, loss of surfactant or postoperative hypoventilation.
          </p>

          <h3>Respiratory Failure</h3>
          <p>
            Respiratory failure occurs when the respiratory system cannot adequately maintain oxygenation
            and/or carbon dioxide elimination. It may present predominantly as hypoxemic or hypercapnic
            respiratory failure.
          </p>
        `,

        microbiology: `
          <h2>Respiratory Microbiology</h2>

          <h3>Upper Respiratory Tract Infections</h3>
          <p>
            Common respiratory infections include viral rhinitis, pharyngitis, sinusitis and laryngitis.
            Respiratory viruses are major causes of upper respiratory tract disease.
          </p>

          <h3>Important Respiratory Viruses</h3>
          <ul>
            <li><strong>Influenza viruses:</strong> cause influenza and may produce severe lower respiratory disease.</li>
            <li><strong>Respiratory syncytial virus:</strong> important cause of bronchiolitis and pneumonia, particularly in infants.</li>
            <li><strong>Rhinoviruses:</strong> common cause of the common cold.</li>
            <li><strong>Coronaviruses:</strong> cause respiratory illnesses ranging from mild upper respiratory infections to severe pneumonia.</li>
            <li><strong>Adenoviruses:</strong> can cause respiratory and other systemic infections.</li>
            <li><strong>Parainfluenza viruses:</strong> associated with respiratory disease including croup.</li>
          </ul>

          <h3>Bacterial Pneumonia</h3>
          <ul>
            <li><strong>Streptococcus pneumoniae:</strong> major cause of community-acquired pneumonia.</li>
            <li><strong>Haemophilus influenzae:</strong> may cause respiratory infections, particularly in susceptible individuals.</li>
            <li><strong>Staphylococcus aureus:</strong> can cause severe pneumonia, including post-influenza pneumonia.</li>
            <li><strong>Klebsiella pneumoniae:</strong> can cause severe pneumonia, particularly in susceptible patients.</li>
            <li><strong>Pseudomonas aeruginosa:</strong> important in hospital-acquired and healthcare-associated infections.</li>
            <li><strong>Mycoplasma pneumoniae:</strong> causes atypical pneumonia.</li>
            <li><strong>Chlamydia pneumoniae:</strong> can cause atypical respiratory infection.</li>
            <li><strong>Legionella pneumophila:</strong> causes Legionnaires' disease and Pontiac fever.</li>
          </ul>

          <h3>Tuberculosis</h3>
          <p>
            Mycobacterium tuberculosis primarily affects the lungs but can disseminate to other organs.
            Pulmonary tuberculosis may produce cough, fever, night sweats, weight loss and hemoptysis.
            Granulomatous inflammation and caseous necrosis are characteristic pathological findings.
          </p>

          <h3>Fungal Respiratory Infections</h3>
          <ul>
            <li><strong>Histoplasma species:</strong> can cause pulmonary and disseminated disease.</li>
            <li><strong>Aspergillus species:</strong> can cause allergic disease, aspergilloma or invasive infection depending on host factors.</li>
            <li><strong>Pneumocystis jirovecii:</strong> causes pneumonia particularly in severely immunocompromised individuals.</li>
          </ul>

          <h3>Diagnostic Methods</h3>
          <ul>
            <li>Sputum microscopy</li>
            <li>Gram staining</li>
            <li>Bacterial culture</li>
            <li>Mycobacterial testing</li>
            <li>Antigen detection</li>
            <li>PCR and other molecular tests</li>
            <li>Blood cultures in selected severe infections</li>
            <li>Chest imaging</li>
          </ul>
        `,

        parasitology: `
          <h2>Respiratory Parasitology</h2>

          <h3>Parasitic Pulmonary Disease</h3>
          <p>
            Several parasites can involve the lungs either as part of their life cycle or as a site of
            pathological infection.
          </p>

          <h3>Ascaris lumbricoides</h3>
          <p>
            During its life cycle, Ascaris larvae migrate through the lungs before being swallowed and
            returning to the gastrointestinal tract. Pulmonary migration may produce transient respiratory
            symptoms and eosinophilic pneumonitis.
          </p>

          <h3>Strongyloides stercoralis</h3>
          <p>
            Strongyloides larvae can migrate through the lungs during their life cycle. Severe
            hyperinfection in immunosuppressed individuals can produce significant pulmonary disease.
          </p>

          <h3>Paragonimus</h3>
          <p>
            Paragonimus species are lung flukes capable of causing chronic pulmonary infection. Disease
            may present with cough, chest pain and hemoptysis and can resemble tuberculosis.
          </p>

          <h3>Hydatid Disease</h3>
          <p>
            Echinococcus granulosus can produce hydatid cysts in the lungs. Pulmonary cysts may remain
            asymptomatic until they become large or rupture.
          </p>

          <h3>Tropical and Travel-Associated Disease</h3>
          <p>
            Respiratory parasitic disease should be considered according to geographic exposure,
            environmental conditions, immunological status and travel or residence history.
          </p>
        `,

        immunology: `
          <h2>Respiratory Immunology</h2>

          <h3>Mucosal Defense</h3>
          <p>
            The respiratory tract is continuously exposed to airborne microorganisms, particles and
            allergens. The respiratory system therefore possesses multiple layers of innate and adaptive
            immune defense.
          </p>

          <h3>Mucociliary Clearance</h3>
          <p>
            Respiratory epithelial cells produce mucus that traps inhaled particles and microorganisms.
            Coordinated beating of cilia moves mucus toward the pharynx, where it can be swallowed or
            expelled.
          </p>

          <h3>Alveolar Macrophages</h3>
          <p>
            Alveolar macrophages patrol the alveolar spaces and remove microorganisms, particles and
            cellular debris through phagocytosis.
          </p>

          <h3>Respiratory Epithelium</h3>
          <p>
            Respiratory epithelial cells contribute to innate immunity through physical barriers,
            mucociliary clearance and production of antimicrobial substances and inflammatory mediators.
          </p>

          <h3>Adaptive Immunity</h3>
          <p>
            Lymphocytes and antibodies contribute to protection against respiratory pathogens. Secretory
            IgA is particularly important at mucosal surfaces.
          </p>

          <h3>Hypersensitivity</h3>
          <p>
            Excessive immune responses can contribute to diseases such as allergic rhinitis and asthma.
            Eosinophils, mast cells, IgE and type 2 immune pathways can participate in allergic airway
            inflammation.
          </p>
        `,

        pharmacology: `
          <h2>Respiratory Pharmacology</h2>

          <h3>Bronchodilators</h3>
          <ul>
            <li><strong>Beta-2 agonists:</strong> stimulate beta-2 adrenergic receptors and relax bronchial smooth muscle.</li>
            <li><strong>Antimuscarinic drugs:</strong> reduce cholinergic bronchoconstriction.</li>
            <li><strong>Methylxanthines:</strong> can produce bronchodilation but have a narrower therapeutic margin.</li>
          </ul>

          <h3>Corticosteroids</h3>
          <p>
            Inhaled corticosteroids reduce airway inflammation and are important controller medications
            in asthma. Systemic corticosteroids may be used in selected acute or severe respiratory
            conditions.
          </p>

          <h3>Mucolytics and Expectorants</h3>
          <p>
            These agents modify airway secretions and may assist clearance of mucus in selected clinical
            circumstances.
          </p>

          <h3>Antibiotics</h3>
          <p>
            Antibacterial therapy is used when bacterial respiratory infection is suspected or confirmed.
            Choice of antimicrobial depends on the likely organism, disease severity, resistance patterns,
            patient factors and local guidelines.
          </p>

          <h3>Antituberculous Therapy</h3>
          <p>
            Tuberculosis requires multidrug antimicrobial therapy using combinations of agents selected
            according to treatment phase, drug susceptibility and applicable guidelines.
          </p>

          <h3>Oxygen Therapy</h3>
          <p>
            Supplemental oxygen increases the inspired oxygen concentration and can improve arterial
            oxygenation in patients with hypoxemia. Oxygen should be administered according to the clinical
            indication and appropriate target saturation.
          </p>
        `,

        clinical: `
          <h2>Clinical Respiratory Correlations</h2>

          <h3>Wheeze</h3>
          <p>
            Wheezing is a musical respiratory sound commonly associated with airflow limitation and
            narrowed airways. It is frequently encountered in asthma and obstructive airway disease.
          </p>

          <h3>Crackles</h3>
          <p>
            Crackles are discontinuous adventitious breath sounds that may occur when small airways or
            alveoli open during inspiration. They can occur in conditions such as pulmonary edema and
            pneumonia.
          </p>

          <h3>Stridor</h3>
          <p>
            Stridor is a harsh, high-pitched sound usually indicating upper airway obstruction. It may
            represent a potentially serious airway emergency.
          </p>

          <h3>Hypoxemia</h3>
          <p>
            Hypoxemia refers to reduced oxygen concentration in arterial blood. Causes include ventilation-
            perfusion mismatch, shunt, diffusion limitation and low inspired oxygen.
          </p>

          <h3>Hypercapnia</h3>
          <p>
            Hypercapnia refers to elevated arterial carbon dioxide. It commonly results from inadequate
            alveolar ventilation.
          </p>

          <h3>Respiratory Acidosis</h3>
          <p>
            Respiratory acidosis develops when inadequate ventilation causes carbon dioxide retention and
            an increase in carbonic acid and hydrogen ion concentration. Renal compensation may occur
            during chronic respiratory acidosis.
          </p>

          <h3>Respiratory Alkalosis</h3>
          <p>
            Respiratory alkalosis occurs when excessive alveolar ventilation reduces arterial carbon
            dioxide concentration.
          </p>

          <h3>Obstructive Lung Disease</h3>
          <p>
            Obstructive disorders are characterized by increased difficulty moving air out of the lungs.
            Asthma and COPD are major examples.
          </p>

          <h3>Restrictive Lung Disease</h3>
          <p>
            Restrictive disorders reduce lung expansion and usually decrease lung volumes. Causes include
            interstitial lung disease, chest wall disorders and neuromuscular disease.
          </p>

          <h3>Clubbing</h3>
          <p>
            Digital clubbing is an enlargement and alteration of the distal digits that can occur in
            several chronic pulmonary, cardiovascular and systemic disorders.
          </p>
        `,

        embryology: `
          <h2>Respiratory Embryology</h2>

          <h3>Origin</h3>
          <p>
            The respiratory epithelium and glands of the lower respiratory tract develop primarily from
            endoderm of the foregut. Supporting connective tissues, cartilage and smooth muscle arise
            largely from surrounding splanchnic mesoderm.
          </p>

          <h3>Respiratory Diverticulum</h3>
          <p>
            The respiratory system begins as a ventral outgrowth of the foregut known as the respiratory
            diverticulum or lung bud. This structure undergoes repeated branching to form the bronchial
            tree.
          </p>

          <h3>Branching Development</h3>
          <p>
            Sequential branching produces the main bronchi, lobar bronchi, segmental bronchi and increasingly
            smaller conducting and respiratory airways.
          </p>

          <h3>Lung Maturation</h3>
          <p>
            Lung development progresses through embryological stages involving formation of conducting
            airways, respiratory bronchioles, alveolar structures and increasing surfactant production.
          </p>

          <h3>Surfactant Development</h3>
          <p>
            Type II pneumocytes develop during fetal life and progressively increase surfactant production.
            Adequate surfactant is essential for maintaining alveolar stability after birth.
          </p>

          <h3>Clinical Correlation</h3>
          <p>
            Premature infants may develop neonatal respiratory distress syndrome because immature lungs
            produce insufficient surfactant, resulting in increased alveolar surface tension and impaired
            lung expansion.
          </p>
        `,

        histology: `
          <h2>Respiratory Histology</h2>

          <h3>Trachea</h3>
          <p>
            The trachea is lined predominantly by pseudostratified ciliated columnar epithelium containing
            goblet cells. Hyaline cartilage supports the airway and helps maintain its patency.
          </p>

          <h3>Bronchi</h3>
          <p>
            Bronchi contain respiratory epithelium, smooth muscle, glands and cartilage. As the airways
            become progressively smaller, cartilage and glands decrease.
          </p>

          <h3>Bronchioles</h3>
          <p>
            Bronchioles lack cartilage and have relatively prominent smooth muscle. Their epithelial lining
            becomes progressively simpler toward the terminal bronchioles.
          </p>

          <h3>Alveoli</h3>
          <p>
            Alveolar walls contain specialized cells involved in gas exchange and surfactant production.
          </p>

          <h4>Type I Pneumocytes</h4>
          <p>
            Type I pneumocytes are thin squamous cells covering most of the alveolar surface. Their thin
            cytoplasm facilitates diffusion of oxygen and carbon dioxide.
          </p>

          <h4>Type II Pneumocytes</h4>
          <p>
            Type II pneumocytes produce pulmonary surfactant and can proliferate and differentiate into
            type I cells following alveolar injury.
          </p>

          <h4>Alveolar Macrophages</h4>
          <p>
            Alveolar macrophages remove inhaled particles, microorganisms and cellular debris from the
            alveolar environment.
          </p>

          <h3>Blood-Air Barrier</h3>
          <p>
            The blood-air barrier consists primarily of alveolar epithelium, fused or closely associated
            basement membranes and pulmonary capillary endothelium. Its thin structure facilitates efficient
            gas diffusion.
          </p>
        `,

        keyFacts: `
          <h2>High-Yield Respiratory Facts</h2>

          <ul>
            <li>The lungs are the principal organs of pulmonary gas exchange.</li>
            <li>The right lung has three lobes.</li>
            <li>The left lung has two lobes.</li>
            <li>The left lung contains the cardiac notch and lingula.</li>
            <li>The diaphragm is the principal muscle of quiet inspiration.</li>
            <li>Type I pneumocytes are specialized for gas exchange.</li>
            <li>Type II pneumocytes produce pulmonary surfactant.</li>
            <li>Surfactant reduces alveolar surface tension and helps prevent alveolar collapse.</li>
            <li>Pulmonary arteries carry deoxygenated blood from the right ventricle to the lungs.</li>
            <li>Pulmonary veins return oxygenated blood to the left atrium.</li>
            <li>Most oxygen is transported bound to hemoglobin.</li>
            <li>Most carbon dioxide is transported in the form of bicarbonate.</li>
            <li>Carbonic anhydrase accelerates the conversion between carbon dioxide and bicarbonate.</li>
            <li>Ventilation refers to movement of air into and out of the lungs.</li>
            <li>Perfusion refers to blood flow through pulmonary capillaries.</li>
            <li>Effective gas exchange requires appropriate ventilation-perfusion matching.</li>
            <li>Asthma is characterized by variable airflow limitation and airway hyperresponsiveness.</li>
            <li>COPD produces persistent airflow limitation.</li>
            <li>Mycobacterium tuberculosis causes pulmonary tuberculosis.</li>
            <li>Streptococcus pneumoniae is an important cause of community-acquired pneumonia.</li>
            <li>Alveolar macrophages provide important innate immune defense.</li>
            <li>Mucociliary clearance removes inhaled particles from the conducting airways.</li>
            <li>The medulla and pons participate in central control of breathing.</li>
            <li>Peripheral chemoreceptors are located mainly in the carotid and aortic bodies.</li>
          </ul>
        `
      },

      parts: [

        {
          id: "right-lung",
          name: "Right Lung",
          modelPath: "models/respiratory/lungs/",
          modelFile: "right_lung.glb",

          notes: {
            anatomy: `
              <h2>Right Lung Anatomy</h2>

              <p>
                The right lung is the larger and generally shorter of the two lungs. It is divided
                into three lobes by the horizontal and oblique fissures.
              </p>

              <h3>Lobes</h3>
              <ul>
                <li>Superior lobe</li>
                <li>Middle lobe</li>
                <li>Inferior lobe</li>
              </ul>

              <h3>Fissures</h3>
              <ul>
                <li><strong>Horizontal fissure:</strong> separates the superior and middle lobes.</li>
                <li><strong>Oblique fissure:</strong> separates the inferior lobe from the superior and middle lobes.</li>
              </ul>

              <h3>Bronchopulmonary Segments</h3>
              <p>
                The right lung is commonly described as having ten bronchopulmonary segments, although
                anatomical variation exists.
              </p>

              <ul>
                <li>Apical</li>
                <li>Posterior</li>
                <li>Anterior</li>
                <li>Lateral</li>
                <li>Medial</li>
                <li>Superior</li>
                <li>Medial basal</li>
                <li>Anterior basal</li>
                <li>Lateral basal</li>
                <li>Posterior basal</li>
              </ul>
            `,

            physiology: `
              <h2>Right Lung Physiology</h2>

              <p>
                The right lung participates in ventilation and pulmonary gas exchange. Air entering
                through the right main bronchus is distributed through the lobar and segmental bronchi
                before reaching the respiratory bronchioles and alveoli.
              </p>
            `,

            clinical: `
              <h2>Right Lung Clinical Correlations</h2>

              <p>
                The right main bronchus is relatively wider, shorter and more vertically oriented than
                the left main bronchus. Consequently, aspirated foreign material is more likely to enter
                the right bronchial tree.
              </p>
            `
          },

          parts: [
            {
              id: "right-upper-lobe",
              name: "Right Upper Lobe",
              modelFile: "right_upper_lobe.glb",

              notes: {
                anatomy: `
                  <h2>Right Upper Lobe</h2>

                  <p>
                    The right upper lobe is located superior to the horizontal and oblique fissures.
                    It contains apical, posterior and anterior bronchopulmonary segments.
                  </p>
                `,

                physiology: `
                  <p>
                    The right upper lobe contributes to ventilation and pulmonary gas exchange.
                    Regional ventilation and perfusion vary with body position and gravity.
                  </p>
                `,

                clinical: `
                  <p>
                    Pathology involving the upper lobes may occur in tuberculosis, malignancy,
                    emphysema and other pulmonary disorders.
                  </p>
                `
              }
            },

            {
              id: "right-middle-lobe",
              name: "Right Middle Lobe",
              modelFile: "right_middle_lobe.glb",

              notes: {
                anatomy: `
                  <h2>Right Middle Lobe</h2>

                  <p>
                    The right middle lobe lies between the horizontal and oblique fissures. It contains
                    medial and lateral bronchopulmonary segments.
                  </p>
                `,

                physiology: `
                  <p>
                    The middle lobe participates in regional ventilation and gas exchange within the
                    right lung.
                  </p>
                `,

                clinical: `
                  <p>
                    Obstruction of the middle lobe bronchus can produce middle lobe atelectasis.
                  </p>
                `
              }
            },

            {
              id: "right-lower-lobe",
              name: "Right Lower Lobe",
              modelFile: "right_lower_lobe.glb",

              notes: {
                anatomy: `
                  <h2>Right Lower Lobe</h2>

                  <p>
                    The right lower lobe lies inferior to the oblique fissure and contains a superior
                    segment and multiple basal segments.
                  </p>

                  <h3>Major Segments</h3>
                  <ul>
                    <li>Superior</li>
                    <li>Medial basal</li>
                    <li>Anterior basal</li>
                    <li>Lateral basal</li>
                    <li>Posterior basal</li>
                  </ul>
                `,

                physiology: `
                  <p>
                    The lower lobes generally receive substantial pulmonary perfusion, particularly in
                    upright individuals because of gravity. They therefore contribute significantly to
                    pulmonary gas exchange.
                  </p>
                `,

                clinical: `
                  <p>
                    Dependent portions of the lower lobes are common sites for aspiration-related
                    pulmonary infection depending on the patient's position.
                  </p>
                `
              }
            }
          ]
        },

        {
          id: "left-lung",
          name: "Left Lung",
          modelPath: "models/respiratory/lungs/",
          modelFile: "left_lung.glb",

          notes: {
            anatomy: `
              <h2>Left Lung Anatomy</h2>

              <p>
                The left lung is slightly smaller than the right lung because the heart occupies part
                of the left side of the thoracic cavity. It contains two lobes separated by an oblique
                fissure.
              </p>

              <h3>Lobes</h3>
              <ul>
                <li>Superior lobe</li>
                <li>Inferior lobe</li>
              </ul>

              <h3>Important Features</h3>
              <ul>
                <li>Cardiac notch</li>
                <li>Lingula</li>
                <li>Oblique fissure</li>
              </ul>
            `,

            physiology: `
              <h2>Left Lung Physiology</h2>

              <p>
                The left lung performs ventilation and gas exchange and participates in regulation of
                arterial oxygen and carbon dioxide levels.
              </p>
            `,

            clinical: `
              <h2>Left Lung Clinical Correlations</h2>

              <p>
                The left lung can be affected by pneumonia, tuberculosis, malignancy, pulmonary embolism,
                pneumothorax, pleural effusion and other pulmonary diseases.
              </p>
            `
          },

          parts: [
            {
              id: "left-upper-lobe",
              name: "Left Upper Lobe",
              modelFile: "left_upper_lobe.glb",

              notes: {
                anatomy: `
                  <h2>Left Upper Lobe</h2>

                  <p>
                    The left upper lobe occupies the superior portion of the left lung. It includes
                    the upper lobe segments and the lingula.
                  </p>
                `,

                physiology: `
                  <p>
                    The upper lobe contributes to ventilation, perfusion and gas exchange within
                    the left lung.
                  </p>
                `,

                clinical: `
                  <p>
                    Upper-lobe pathology may occur in infections, malignancy, emphysema and other
                    pulmonary disorders.
                  </p>
                `
              }
            },

            {
              id: "lingula",
              name: "Lingula",
              modelFile: "lingula.glb",

              notes: {
                anatomy: `
                  <h2>Lingula</h2>

                  <p>
                    The lingula is a tongue-shaped projection of the left upper lobe that lies adjacent
                    to the heart. It is divided into superior and inferior lingular segments.
                  </p>
                `,

                physiology: `
                  <p>
                    The lingula participates in ventilation and gas exchange and is functionally
                    comparable in some respects to the right middle lobe.
                  </p>
                `,

                clinical: `
                  <p>
                    Lingular disease can produce radiographic findings that may resemble pathology
                    involving the right middle lobe.
                  </p>
                `
              }
            },

            {
              id: "left-lower-lobe",
              name: "Left Lower Lobe",
              modelFile: "left_lower_lobe.glb",

              notes: {
                anatomy: `
                  <h2>Left Lower Lobe</h2>

                  <p>
                    The left lower lobe lies inferior to the oblique fissure and contains the superior
                    and basal segments.
                  </p>
                `,

                physiology: `
                  <p>
                    The left lower lobe contributes substantially to ventilation and pulmonary perfusion,
                    particularly in dependent regions.
                  </p>
                `,

                clinical: `
                  <p>
                    Lower-lobe disease may occur in pneumonia, aspiration, pulmonary edema, atelectasis
                    and other pulmonary disorders.
                  </p>
                `
              }
            }
          ]
        },

        {
          id: "trachea",
          name: "Trachea",
          modelPath: "models/respiratory/airways/",
          modelFile: "trachea.glb",

          notes: {
            anatomy: `
              <h2>Trachea</h2>

              <p>
                The trachea is a flexible conducting airway extending from the larynx to the main
                bronchi. It is supported by C-shaped rings of hyaline cartilage that help prevent
                airway collapse.
              </p>

              <h3>Carina</h3>
              <p>
                Inferiorly, the trachea divides at the carina into the right and left main bronchi.
              </p>
            `,

            physiology: `
              <p>
                The trachea conducts, warms, humidifies and filters inspired air. Mucus traps particles,
                while coordinated ciliary activity moves mucus toward the pharynx.
              </p>
            `,

            clinical: `
              <p>
                Tracheal obstruction can rapidly compromise ventilation. The carina is also an important
                anatomical landmark during bronchoscopy and airway procedures.
              </p>
            `
          }
        },

        {
          id: "bronchi",
          name: "Bronchi",
          modelPath: "models/respiratory/airways/",
          modelFile: "bronchi.glb",

          notes: {
            anatomy: `
              <h2>Bronchi</h2>

              <p>
                The main bronchi arise from the bifurcation of the trachea. The right main bronchus is
                generally wider, shorter and more vertically oriented than the left.
              </p>

              <p>
                Main bronchi divide into lobar bronchi, which then divide into segmental bronchi.
                Continued branching ultimately produces the smaller conducting airways.
              </p>
            `,

            physiology: `
              <p>
                Bronchi conduct air to and from the lung parenchyma. Airway smooth muscle and mucosal
                secretions contribute to regulation of airway resistance and particle clearance.
              </p>
            `,

            pathology: `
              <p>
                Bronchial inflammation and narrowing occur in conditions such as asthma, chronic
                bronchitis and infectious bronchitis.
              </p>
            `
          }
        },

        {
          id: "bronchioles",
          name: "Bronchioles",
          modelPath: "models/respiratory/airways/",
          modelFile: "bronchioles.glb",

          notes: {
            anatomy: `
              <h2>Bronchioles</h2>

              <p>
                Bronchioles are small conducting airways that lack cartilage. They contain smooth muscle
                and are lined by progressively simpler epithelium as airway diameter decreases.
              </p>

              <p>
                Terminal bronchioles represent the end of the conducting zone. Respiratory bronchioles
                mark the beginning of the respiratory zone.
              </p>
            `,

            physiology: `
              <p>
                Bronchiolar diameter strongly influences airway resistance. Constriction decreases
                airflow, while relaxation increases airway caliber.
              </p>
            `,

            clinical: `
              <p>
                Bronchiolar obstruction is particularly important in asthma, bronchiolitis and COPD.
              </p>
            `
          }
        },

        {
          id: "alveoli",
          name: "Alveoli",
          modelPath: "models/respiratory/alveoli/",
          modelFile: "alveoli.glb",

          notes: {
            anatomy: `
              <h2>Alveoli</h2>

              <p>
                Alveoli are microscopic air-filled sacs located at the terminal ends of the respiratory
                tree. They provide the principal surface for pulmonary gas exchange.
              </p>

              <h3>Alveolar Cells</h3>
              <ul>
                <li><strong>Type I pneumocytes:</strong> thin cells specialized for gas diffusion.</li>
                <li><strong>Type II pneumocytes:</strong> produce pulmonary surfactant.</li>
                <li><strong>Alveolar macrophages:</strong> remove particles and microorganisms.</li>
              </ul>

              <h3>Blood-Air Barrier</h3>
              <p>
                The blood-air barrier is extremely thin, allowing oxygen and carbon dioxide to diffuse
                efficiently between alveolar air and pulmonary capillary blood.
              </p>
            `,

            physiology: `
              <h2>Alveolar Physiology</h2>

              <p>
                Oxygen diffuses from alveolar air into pulmonary capillary blood, while carbon dioxide
                diffuses from blood into the alveoli for elimination during expiration.
              </p>

              <h3>Surface Tension</h3>
              <p>
                The air-liquid interface of the alveolus generates surface tension. Surfactant reduces
                this tension and stabilizes alveoli, particularly smaller alveoli.
              </p>

              <h3>Diffusion</h3>
              <p>
                Gas diffusion is influenced by the surface area available for exchange, membrane thickness,
                diffusion characteristics of the gases and the partial-pressure gradient.
              </p>
            `,

            pathology: `
              <h2>Alveolar Pathology</h2>

              <ul>
                <li><strong>Pneumonia:</strong> inflammatory exudate can fill alveolar spaces.</li>
                <li><strong>Pulmonary edema:</strong> fluid accumulation interferes with gas exchange.</li>
                <li><strong>Emphysema:</strong> destruction of alveolar walls reduces gas-exchange surface area.</li>
                <li><strong>ARDS:</strong> diffuse alveolar-capillary injury causes severe impaired oxygenation.</li>
              </ul>
            `
          }
        },

        {
          id: "diaphragm",
          name: "Diaphragm",
          modelPath: "models/respiratory/muscles/",
          modelFile: "diaphragm.glb",

          notes: {
            anatomy: `
              <h2>Diaphragm Anatomy</h2>

              <p>
                The diaphragm is a dome-shaped skeletal muscle separating the thoracic and abdominal
                cavities. It is the principal muscle responsible for quiet inspiration.
              </p>

              <p>
                The diaphragm has peripheral muscular attachments and a central tendon. Major structures
                pass through it via anatomical openings.
              </p>

              <h3>Major Openings</h3>
              <ul>
                <li><strong>Caval opening:</strong> transmits the inferior vena cava.</li>
                <li><strong>Esophageal hiatus:</strong> transmits the esophagus and vagal trunks.</li>
                <li><strong>Aortic hiatus:</strong> transmits the aorta and thoracic duct.</li>
              </ul>
            `,

            physiology: `
              <h2>Diaphragm Physiology</h2>

              <p>
                During inspiration, contraction of the diaphragm causes it to descend and increases
                thoracic volume. This lowers intrathoracic pressure and promotes airflow into the lungs.
              </p>

              <p>
                Relaxation allows the diaphragm to return toward its resting position. During forced
                breathing, additional respiratory muscles contribute to changes in thoracic volume.
              </p>
            `,

            clinical: `
              <h2>Diaphragm Clinical Correlations</h2>

              <p>
                Phrenic nerve dysfunction can cause diaphragmatic weakness or paralysis. Bilateral
                diaphragmatic dysfunction may significantly impair ventilation.
              </p>
            `
          }
        }
      ]
    },

    {
      id: "upper-airway",
      name: "Upper Respiratory Tract",
      modelPath: "models/respiratory/upper-airway/",
      modelFile: "upper_airway.glb",

      notes: {
        anatomy: `
          <h2>Upper Respiratory Tract</h2>

          <p>
            The upper respiratory tract includes structures that conduct inspired and expired air before
            it reaches the lower respiratory tract.
          </p>

          <ul>
            <li>Nose</li>
            <li>Nasal cavity</li>
            <li>Paranasal sinuses</li>
            <li>Pharynx</li>
          </ul>
        `,

        physiology: `
          <p>
            The upper respiratory tract filters, warms and humidifies inspired air. It also contributes
            to olfaction, resonance of the voice and immune defense.
          </p>
        `,

        pathology: `
          <p>
            Common disorders include rhinitis, sinusitis, pharyngitis and upper airway obstruction.
          </p>
        `
      },

      parts: [
        {
          id: "nose",
          name: "Nose",
          modelFile: "nose.glb",

          notes: {
            anatomy: `
              <h2>Nose</h2>

              <p>
                The nose forms the external entrance to the respiratory tract and communicates with the
                nasal cavity through the nostrils.
              </p>
            `,

            physiology: `
              <p>
                The nose filters particles, warms and humidifies inspired air and contributes to the
                sense of smell.
              </p>
            `,

            clinical: `
              <p>
                Nasal obstruction may impair airflow and contribute to mouth breathing and sleep-related
                respiratory problems.
              </p>
            `
          }
        },

        {
          id: "nasal-cavity",
          name: "Nasal Cavity",
          modelFile: "nasal_cavity.glb",

          notes: {
            anatomy: `
              <h2>Nasal Cavity</h2>

              <p>
                The nasal cavity extends from the nostrils to the posterior openings into the
                nasopharynx. Nasal conchae increase the surface area and promote turbulent airflow.
              </p>
            `,

            physiology: `
              <p>
                Turbulent airflow increases contact between inspired air and the mucosal surface,
                facilitating warming, humidification and filtration.
              </p>
            `
          }
        },

        {
          id: "pharynx",
          name: "Pharynx",
          modelFile: "pharynx.glb",

          notes: {
            anatomy: `
              <h2>Pharynx</h2>

              <p>
                The pharynx is a muscular passage shared by the respiratory and digestive systems.
              </p>

              <ul>
                <li>Nasopharynx</li>
                <li>Oropharynx</li>
                <li>Laryngopharynx</li>
              </ul>
            `,

            physiology: `
              <p>
                The pharynx conducts air toward the larynx and food toward the esophagus. Coordinated
                swallowing mechanisms protect the lower airway from aspiration.
              </p>
            `,

            clinical: `
              <p>
                Pharyngeal inflammation can cause dysphagia, odynophagia and upper airway symptoms.
              </p>
            `
          }
        }
      ]
    },

    {
      id: "larynx",
      name: "Larynx",
      modelPath: "models/respiratory/larynx/",
      modelFile: "larynx.glb",

      notes: {
        anatomy: `
          <h2>Larynx Anatomy</h2>

          <p>
            The larynx is a cartilaginous organ located between the pharynx and trachea. It maintains
            airway patency, protects the lower respiratory tract and participates in phonation.
          </p>

          <h3>Major Cartilages</h3>
          <ul>
            <li>Thyroid cartilage</li>
            <li>Cricoid cartilage</li>
            <li>Epiglottis</li>
            <li>Arytenoid cartilages</li>
            <li>Corniculate cartilages</li>
            <li>Cuneiform cartilages</li>
          </ul>
        `,

        physiology: `
          <h2>Laryngeal Physiology</h2>

          <p>
            The larynx protects the lower airway during swallowing and generates sound through vibration
            of the vocal folds.
          </p>

          <h3>Airway Protection</h3>
          <p>
            During swallowing, coordinated closure of the laryngeal inlet reduces the risk of aspiration
            of food and liquid into the tracheobronchial tree.
          </p>

          <h3>Phonation</h3>
          <p>
            Airflow from the lungs causes vibration of the vocal folds. Changes in vocal-fold tension,
            length and configuration influence the characteristics of the resulting sound.
          </p>
        `,

        clinical: `
          <h2>Laryngeal Clinical Correlations</h2>

          <p>
            Laryngeal inflammation, vocal-fold lesions, trauma or nerve injury can cause hoarseness,
            dysphonia or airway obstruction.
          </p>
        `
      }
    }
  ]
};