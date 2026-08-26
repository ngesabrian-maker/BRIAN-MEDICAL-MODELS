export const endocrineSystem = {
  id: "endocrine",
  name: "Endocrine System",

  organs: [
    {
      id: "pituitary-gland",
      name: "Pituitary Gland",
      modelPath: null,
      modelFile: null,

      notes: {
        anatomy: `
          <h2>Pituitary Gland Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The pituitary gland, or hypophysis, is a small endocrine gland located at the base of
            the brain within the sella turcica of the sphenoid bone. It is connected to the
            hypothalamus by the infundibulum and is divided anatomically into the anterior
            pituitary (adenohypophysis) and posterior pituitary (neurohypophysis).
          </p>

          <h3>Parts</h3>
          <ul>
            <li><strong>Anterior pituitary:</strong> pars distalis, pars tuberalis and pars intermedia.</li>
            <li><strong>Posterior pituitary:</strong> pars nervosa and infundibular stalk.</li>
          </ul>

          <h3>Relationships</h3>
          <p>
            The pituitary lies inferior to the hypothalamus and near the optic chiasm. Laterally,
            it is closely related to the cavernous sinuses, which contain the internal carotid
            arteries and several cranial nerves.
          </p>

          <h3>Vascular Supply</h3>
          <p>
            The anterior pituitary receives hypothalamic regulatory hormones primarily through
            the hypophyseal portal system. The posterior pituitary receives arterial blood from
            hypophyseal vessels and releases hormones synthesized in the hypothalamus.
          </p>
        `,

        physiology: `
          <h2>Pituitary Physiology</h2>

          <h3>Anterior Pituitary Hormones</h3>
          <ul>
            <li><strong>Growth hormone (GH):</strong> promotes growth and influences protein, lipid and carbohydrate metabolism.</li>
            <li><strong>Thyroid-stimulating hormone (TSH):</strong> stimulates thyroid hormone synthesis and release.</li>
            <li><strong>Adrenocorticotropic hormone (ACTH):</strong> stimulates the adrenal cortex, particularly glucocorticoid production.</li>
            <li><strong>Follicle-stimulating hormone (FSH):</strong> regulates gametogenesis and gonadal function.</li>
            <li><strong>Luteinizing hormone (LH):</strong> regulates ovulation, corpus luteum function and gonadal steroidogenesis.</li>
            <li><strong>Prolactin:</strong> stimulates milk production and influences reproductive physiology.</li>
          </ul>

          <h3>Posterior Pituitary Hormones</h3>
          <ul>
            <li><strong>Antidiuretic hormone (ADH/vasopressin):</strong> promotes renal water retention and contributes to vascular tone.</li>
            <li><strong>Oxytocin:</strong> promotes uterine contraction and milk ejection.</li>
          </ul>

          <h3>Feedback Regulation</h3>
          <p>
            Most pituitary endocrine axes are regulated by negative feedback. For example,
            hypothalamic TRH stimulates TSH release, TSH stimulates thyroid hormone production,
            and circulating thyroid hormones inhibit further TRH and TSH secretion.
          </p>
        `,

        biochemistry: `
          <h2>Pituitary Biochemistry</h2>

          <p>
            Pituitary hormones are predominantly peptide or glycoprotein hormones. Their effects
            are mediated through specific membrane receptors and intracellular signaling pathways.
          </p>

          <ul>
            <li><strong>GH:</strong> acts partly through insulin-like growth factor-1 (IGF-1).</li>
            <li><strong>TSH:</strong> is a glycoprotein hormone acting through a G-protein-coupled receptor.</li>
            <li><strong>ACTH:</strong> is derived from proopiomelanocortin (POMC).</li>
            <li><strong>FSH and LH:</strong> are glycoprotein hormones.</li>
            <li><strong>Prolactin:</strong> belongs to the same broad hormone family as GH.</li>
            <li><strong>ADH:</strong> is a peptide synthesized in hypothalamic neurons.</li>
            <li><strong>Oxytocin:</strong> is a peptide synthesized in the hypothalamus.</li>
          </ul>
        `,

        pathology: `
          <h2>Pituitary Pathology</h2>

          <h3>Pituitary Adenoma</h3>
          <p>
            Pituitary adenomas are usually benign tumors arising from adenohypophyseal cells.
            They may be functioning or non-functioning.
          </p>

          <ul>
            <li><strong>Prolactinoma:</strong> produces excessive prolactin.</li>
            <li><strong>Somatotroph adenoma:</strong> produces excess GH.</li>
            <li><strong>Corticotroph adenoma:</strong> produces excess ACTH.</li>
            <li><strong>Thyrotroph adenoma:</strong> produces excess TSH.</li>
          </ul>

          <h3>Hyperprolactinemia</h3>
          <p>
            Elevated prolactin may cause galactorrhea, menstrual disturbance, infertility and
            reduced gonadal function.
          </p>

          <h3>Growth Hormone Disorders</h3>
          <ul>
            <li><strong>Gigantism:</strong> excessive GH before epiphyseal closure.</li>
            <li><strong>Acromegaly:</strong> excessive GH after epiphyseal closure.</li>
            <li><strong>GH deficiency:</strong> may impair linear growth in children.</li>
          </ul>

          <h3>Diabetes Insipidus</h3>
          <p>
            Deficient ADH secretion or impaired renal response to ADH causes excessive water
            loss, polyuria and polydipsia.
          </p>

          <h3>SIADH</h3>
          <p>
            Syndrome of inappropriate antidiuretic hormone secretion causes excessive water
            retention and dilutional hyponatremia.
          </p>
        `,

        clinical: `
          <h2>Pituitary Clinical Correlations</h2>

          <ul>
            <li>Large pituitary tumors may compress the optic chiasm and produce bitemporal hemianopia.</li>
            <li>ACTH excess may produce Cushing disease.</li>
            <li>GH excess in adults causes acromegaly.</li>
            <li>Prolactin excess may cause reproductive dysfunction.</li>
            <li>Loss of multiple pituitary hormones produces hypopituitarism.</li>
          </ul>
        `,

        embryology: `
          <h2>Pituitary Embryology</h2>

          <p>
            The pituitary develops from two embryologically distinct structures.
          </p>

          <ul>
            <li><strong>Anterior pituitary:</strong> develops from Rathke's pouch, an upward extension of oral ectoderm.</li>
            <li><strong>Posterior pituitary:</strong> develops from a downward extension of neuroectoderm from the diencephalon.</li>
          </ul>
        `,

        histology: `
          <h2>Pituitary Histology</h2>

          <h3>Anterior Pituitary</h3>
          <ul>
            <li><strong>Acidophils:</strong> include somatotrophs and lactotrophs.</li>
            <li><strong>Basophils:</strong> include corticotrophs, thyrotrophs and gonadotrophs.</li>
            <li><strong>Chromophobes:</strong> cells with relatively little staining cytoplasm.</li>
          </ul>

          <h3>Posterior Pituitary</h3>
          <p>
            Contains axons and nerve terminals from hypothalamic neurons, pituicytes and a rich
            capillary network.
          </p>
        `
      }
    },

    {
      id: "thyroid-gland",
      name: "Thyroid Gland",
      modelPath: null,
      modelFile: null,

      notes: {
        anatomy: `
          <h2>Thyroid Gland Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The thyroid gland is a butterfly-shaped endocrine organ located in the anterior
            neck, inferior to the larynx and anterior to the trachea.
          </p>

          <h3>Parts</h3>
          <ul>
            <li>Right lobe</li>
            <li>Left lobe</li>
            <li>Isthmus</li>
            <li>Pyramidal lobe may be present</li>
          </ul>

          <h3>Blood Supply</h3>
          <p>
            The thyroid receives blood primarily from the superior and inferior thyroid arteries.
          </p>

          <h3>Hormone-Producing Cells</h3>
          <ul>
            <li><strong>Follicular cells:</strong> produce T4 and T3.</li>
            <li><strong>Parafollicular C cells:</strong> produce calcitonin.</li>
          </ul>
        `,

        physiology: `
          <h2>Thyroid Physiology</h2>

          <p>
            Thyroid hormones regulate basal metabolic rate, oxygen consumption, thermogenesis,
            growth and development.
          </p>

          <h3>Thyroid Hormones</h3>
          <ul>
            <li><strong>Thyroxine (T4):</strong> major hormone released by the thyroid.</li>
            <li><strong>Triiodothyronine (T3):</strong> more biologically active thyroid hormone.</li>
            <li><strong>Calcitonin:</strong> contributes to calcium regulation.</li>
          </ul>

          <h3>Hypothalamic-Pituitary-Thyroid Axis</h3>
          <p>
            TRH stimulates TSH release. TSH stimulates thyroid hormone synthesis. T3 and T4
            exert negative feedback on the hypothalamus and pituitary.
          </p>
        `,

        biochemistry: `
          <h2>Thyroid Biochemistry</h2>

          <p>
            Thyroid hormone synthesis requires iodine and thyroglobulin.
          </p>

          <ol>
            <li>Iodide is transported into thyroid follicular cells.</li>
            <li>Iodide is oxidized to an active form of iodine.</li>
            <li>Iodination of tyrosine residues occurs on thyroglobulin.</li>
            <li>MIT and DIT residues are formed.</li>
            <li>Coupling of DIT + DIT produces T4.</li>
            <li>Coupling of MIT + DIT produces T3.</li>
          </ol>

          <p>
            Most circulating T3 and T4 are protein-bound, primarily to thyroxine-binding globulin,
            transthyretin and albumin.
          </p>
        `,

        pathology: `
          <h2>Thyroid Pathology</h2>

          <h3>Hypothyroidism</h3>
          <p>
            Hypothyroidism results from inadequate thyroid hormone action. Common causes include
            autoimmune thyroid disease, iodine deficiency, thyroid destruction and inadequate
            hormone production.
          </p>

          <ul>
            <li>Fatigue</li>
            <li>Cold intolerance</li>
            <li>Weight gain</li>
            <li>Bradycardia</li>
            <li>Constipation</li>
            <li>Dry skin</li>
          </ul>

          <h3>Hyperthyroidism</h3>
          <p>
            Excess thyroid hormone increases metabolic activity.
          </p>

          <ul>
            <li>Weight loss</li>
            <li>Heat intolerance</li>
            <li>Tachycardia</li>
            <li>Tremor</li>
            <li>Anxiety</li>
            <li>Increased bowel activity</li>
          </ul>

          <h3>Goiter</h3>
          <p>
            Goiter refers to enlargement of the thyroid gland and may occur with hypothyroidism,
            hyperthyroidism or normal thyroid function.
          </p>

          <h3>Thyroid Cancer</h3>
          <ul>
            <li>Papillary carcinoma</li>
            <li>Follicular carcinoma</li>
            <li>Medullary carcinoma</li>
            <li>Anaplastic carcinoma</li>
          </ul>
        `,

        pharmacology: `
          <h2>Thyroid Pharmacology</h2>

          <ul>
            <li><strong>Levothyroxine:</strong> synthetic T4 used to treat hypothyroidism.</li>
            <li><strong>Methimazole:</strong> inhibits thyroid hormone synthesis.</li>
            <li><strong>Propylthiouracil:</strong> inhibits thyroid hormone synthesis and peripheral T4-to-T3 conversion.</li>
            <li><strong>Radioactive iodine:</strong> can destroy thyroid tissue and is used in selected thyroid disorders.</li>
          </ul>
        `,

        histology: `
          <h2>Thyroid Histology</h2>

          <p>
            The thyroid consists of spherical follicles filled with colloid. Follicular cells
            surround the colloid and synthesize thyroid hormones. Parafollicular cells occur
            between follicles and produce calcitonin.
          </p>
        `
      }
    },

    {
      id: "parathyroid-glands",
      name: "Parathyroid Glands",
      modelPath: null,
      modelFile: null,

      notes: {
        anatomy: `
          <h2>Parathyroid Anatomy</h2>

          <p>
            The parathyroid glands are usually four small endocrine glands located on the
            posterior surface of the thyroid gland.
          </p>

          <p>
            They are commonly divided into superior and inferior pairs, although their number
            and exact anatomical position may vary.
          </p>
        `,

        physiology: `
          <h2>Parathyroid Physiology</h2>

          <p>
            The major function of the parathyroid glands is regulation of extracellular calcium
            and phosphate concentrations through secretion of parathyroid hormone (PTH).
          </p>

          <h3>Effects of PTH</h3>
          <ul>
            <li>Increases renal calcium reabsorption.</li>
            <li>Decreases renal phosphate reabsorption.</li>
            <li>Stimulates activation of vitamin D in the kidney.</li>
            <li>Increases intestinal calcium absorption indirectly through calcitriol.</li>
            <li>Promotes bone resorption when chronically elevated.</li>
          </ul>
        `,

        biochemistry: `
          <h2>Parathyroid Biochemistry</h2>

          <p>
            PTH is a peptide hormone synthesized as a precursor molecule and released in response
            to reduced extracellular calcium.
          </p>

          <p>
            PTH acts through G-protein-coupled receptors and influences cyclic AMP and other
            intracellular signaling pathways.
          </p>
        `,

        pathology: `
          <h2>Parathyroid Pathology</h2>

          <h3>Hyperparathyroidism</h3>
          <p>
            Excess PTH causes increased calcium availability and may produce hypercalcemia,
            nephrolithiasis, bone disease and gastrointestinal or neuropsychiatric symptoms.
          </p>

          <h3>Hypoparathyroidism</h3>
          <p>
            Reduced PTH causes hypocalcemia and may result in neuromuscular irritability,
            paresthesia, muscle spasms and tetany.
          </p>
        `,

        histology: `
          <h2>Parathyroid Histology</h2>

          <ul>
            <li><strong>Chief cells:</strong> produce PTH.</li>
            <li><strong>Oxyphil cells:</strong> larger cells containing abundant mitochondria.</li>
          </ul>
        `
      }
    },

    {
      id: "adrenal-glands",
      name: "Adrenal Glands",
      modelPath: null,
      modelFile: null,

      notes: {
        anatomy: `
          <h2>Adrenal Gland Anatomy</h2>

          <p>
            The adrenal glands are paired endocrine organs located superior to the kidneys.
            Each gland consists of an outer cortex and an inner medulla.
          </p>

          <h3>Adrenal Cortex</h3>
          <ul>
            <li>Zona glomerulosa</li>
            <li>Zona fasciculata</li>
            <li>Zona reticularis</li>
          </ul>

          <h3>Adrenal Medulla</h3>
          <p>
            The medulla contains chromaffin cells that function as modified sympathetic
            neuroendocrine cells.
          </p>
        `,

        physiology: `
          <h2>Adrenal Physiology</h2>

          <h3>Adrenal Cortex</h3>
          <ul>
            <li><strong>Zona glomerulosa:</strong> produces mineralocorticoids, primarily aldosterone.</li>
            <li><strong>Zona fasciculata:</strong> produces glucocorticoids, primarily cortisol.</li>
            <li><strong>Zona reticularis:</strong> produces adrenal androgens.</li>
          </ul>

          <h3>Adrenal Medulla</h3>
          <p>
            Produces catecholamines, mainly epinephrine and norepinephrine, during sympathetic
            activation.
          </p>
        `,

        biochemistry: `
          <h2>Adrenal Biochemistry</h2>

          <p>
            Adrenal cortical hormones are steroid hormones synthesized from cholesterol.
          </p>

          <h3>Cortisol</h3>
          <p>
            Cortisol influences glucose metabolism, protein metabolism, lipid metabolism,
            vascular responsiveness and immune activity.
          </p>

          <h3>Aldosterone</h3>
          <p>
            Aldosterone promotes sodium reabsorption and potassium secretion in the distal
            nephron.
          </p>

          <h3>Catecholamines</h3>
          <p>
            Epinephrine and norepinephrine are synthesized from tyrosine through a pathway
            involving dopamine and norepinephrine.
          </p>
        `,

        pathology: `
          <h2>Adrenal Pathology</h2>

          <h3>Cushing Syndrome</h3>
          <p>
            Results from excessive glucocorticoid exposure. Features may include central
            adiposity, hypertension, hyperglycemia, muscle weakness and skin changes.
          </p>

          <h3>Addison Disease</h3>
          <p>
            Primary adrenal insufficiency results from inadequate adrenal cortical hormone
            production and may cause fatigue, hypotension, weight loss, hyperpigmentation and
            electrolyte abnormalities.
          </p>

          <h3>Hyperaldosteronism</h3>
          <p>
            Excess aldosterone promotes sodium retention, hypertension and potassium loss.
          </p>

          <h3>Pheochromocytoma</h3>
          <p>
            A catecholamine-producing tumor arising from chromaffin cells. It may produce
            episodic hypertension, headache, sweating and palpitations.
          </p>
        `,

        pharmacology: `
          <h2>Adrenal Pharmacology</h2>

          <ul>
            <li><strong>Hydrocortisone:</strong> glucocorticoid replacement and anti-inflammatory therapy.</li>
            <li><strong>Prednisolone:</strong> synthetic glucocorticoid.</li>
            <li><strong>Fludrocortisone:</strong> mineralocorticoid replacement.</li>
            <li><strong>Spironolactone:</strong> mineralocorticoid receptor antagonist.</li>
            <li><strong>Ketoconazole:</strong> can inhibit steroid synthesis and may be used in selected cases of hypercortisolism.</li>
          </ul>
        `,

        histology: `
          <h2>Adrenal Histology</h2>

          <p>
            The adrenal cortex contains three distinct zones arranged from outer to inner:
            zona glomerulosa, zona fasciculata and zona reticularis.
          </p>

          <p>
            The adrenal medulla contains chromaffin cells surrounding a rich vascular network.
          </p `
      }
    },

    {
      id: "pancreas",
      name: "Pancreas",
      modelPath: null,
      modelFile: null,

      notes: {
        anatomy: `
          <h2>Pancreas Anatomy</h2>

          <h3>Overview</h3>
          <p>
            The pancreas is an elongated gland located posterior to the stomach. It has both
            endocrine and exocrine functions.
          </p>

          <h3>Parts</h3>
          <ul>
            <li>Head</li>
            <li>Uncinate process</li>
            <li>Neck</li>
            <li>Body</li>
            <li>Tail</li>
          </ul>

          <h3>Endocrine Component</h3>
          <p>
            The endocrine pancreas consists of the islets of Langerhans, which are distributed
            throughout the pancreatic tissue.
          </p>
        `,

        physiology: `
          <h2>Pancreatic Endocrine Physiology</h2>

          <h3>Insulin</h3>
          <p>
            Insulin lowers blood glucose by promoting glucose uptake and storage and by
            suppressing hepatic glucose production.
          </p>

          <h3>Glucagon</h3>
          <p>
            Glucagon increases blood glucose primarily by stimulating hepatic glycogenolysis
            and gluconeogenesis.
          </p>

          <h3>Somatostatin</h3>
          <p>
            Somatostatin inhibits several endocrine and gastrointestinal secretory processes.
          </p>

          <h3>Pancreatic Polypeptide</h3>
          <p>
            Pancreatic polypeptide contributes to regulation of pancreatic and gastrointestinal
            function.
          </p>
        `,

        biochemistry: `
          <h2>Pancreatic Endocrine Biochemistry</h2>

          <h3>Insulin Synthesis</h3>
          <p>
            Insulin is synthesized as preproinsulin, processed into proinsulin and subsequently
            cleaved into insulin and C-peptide.
          </p>

          <h3>Glucose Homeostasis</h3>
          <p>
            Insulin promotes glycogenesis, glycolysis and lipogenesis while suppressing
            glycogenolysis, gluconeogenesis and lipolysis.
          </p>

          <h3>Glucagon</h3>
          <p>
            Glucagon promotes hepatic glycogen breakdown and gluconeogenesis during fasting.
          </p>
        `,

        pathology: `
          <h2>Pancreatic Endocrine Pathology</h2>

          <h3>Diabetes Mellitus</h3>
          <p>
            Diabetes mellitus is characterized by chronic hyperglycemia resulting from impaired
            insulin secretion, impaired insulin action, or both.
          </p>

          <h3>Type 1 Diabetes Mellitus</h3>
          <p>
            Usually results from autoimmune destruction of pancreatic beta cells, causing
            severe insulin deficiency.
          </p>

          <h3>Type 2 Diabetes Mellitus</h3>
          <p>
            Characterized primarily by insulin resistance with progressive impairment of
            beta-cell insulin secretion.
          </p>

          <h3>Diabetic Ketoacidosis</h3>
          <p>
            Severe insulin deficiency promotes lipolysis and hepatic ketone production,
            producing metabolic acidosis and hyperglycemia.
          </p>

          <h3>Hypoglycemia</h3>
          <p>
            Excess insulin relative to glucose availability may cause neuroglycopenic and
            adrenergic symptoms.
          </p>

          <h3>Insulinoma</h3>
          <p>
            An insulin-secreting pancreatic neuroendocrine tumor may produce recurrent
            hypoglycemia.
          </p>
        `,

        pharmacology: `
          <h2>Pancreatic Endocrine Pharmacology</h2>

          <ul>
            <li><strong>Insulin:</strong> replaces or supplements endogenous insulin.</li>
            <li><strong>Metformin:</strong> reduces hepatic glucose production and improves insulin sensitivity.</li>
            <li><strong>Sulfonylureas:</strong> stimulate pancreatic insulin secretion.</li>
            <li><strong>GLP-1 receptor agonists:</strong> enhance glucose-dependent insulin secretion and have additional metabolic effects.</li>
            <li><strong>SGLT2 inhibitors:</strong> increase urinary glucose excretion.</li>
            <li><strong>DPP-4 inhibitors:</strong> prolong endogenous incretin activity.</li>
          </ul>
        `,

        histology: `
          <h2>Pancreatic Endocrine Histology</h2>

          <p>
            The islets of Langerhans are pale-staining endocrine clusters distributed among
            exocrine acini.
          </p>

          <ul>
            <li><strong>Beta cells:</strong> produce insulin.</li>
            <li><strong>Alpha cells:</strong> produce glucagon.</li>
            <li><strong>Delta cells:</strong> produce somatostatin.</li>
            <li><strong>PP cells:</strong> produce pancreatic polypeptide.</li>
          </ul>
        `
      }
    },

    {
      id: "pineal-gland",
      name: "Pineal Gland",
      modelPath: null,
      modelFile: null,

      notes: {
        anatomy: `
          <h2>Pineal Gland Anatomy</h2>

          <p>
            The pineal gland is a small endocrine structure located near the roof of the
            third ventricle in the epithalamus.
          </p>
        `,

        physiology: `
          <h2>Pineal Physiology</h2>

          <p>
            The pineal gland secretes melatonin, a hormone involved in regulation of circadian
            rhythms and sleep-wake timing.
          </p>

          <p>
            Melatonin secretion generally increases during darkness and is suppressed by
            light reaching the retina.
          </p>
        `,

        biochemistry: `
          <h2>Pineal Biochemistry</h2>

          <p>
            Melatonin is synthesized from tryptophan through serotonin as an intermediate.
            The pathway includes hydroxylation, decarboxylation, acetylation and methylation
            reactions.
          </p>
        `,

        pathology: `
          <h2>Pineal Clinical Pathology</h2>

          <p>
            Pineal region tumors may compress nearby structures and may interfere with
            cerebrospinal fluid circulation, potentially producing hydrocephalus.
          </p>
        `,

        histology: `
          <h2>Pineal Histology</h2>

          <p>
            The pineal gland contains pinealocytes and supporting glial cells. Calcified
            structures known as corpora arenacea may occur with increasing age.
          </p>
        `
      }
    },

    {
      id: "hypothalamus",
      name: "Hypothalamus",
      modelPath: null,
      modelFile: null,

      notes: {
        anatomy: `
          <h2>Hypothalamus Anatomy</h2>

          <p>
            The hypothalamus is a region of the diencephalon located inferior to the thalamus
            and forms part of the floor and walls of the third ventricle.
          </p>

          <h3>Important Regions and Nuclei</h3>
          <ul>
            <li>Supraoptic nucleus</li>
            <li>Paraventricular nucleus</li>
            <li>Suprachiasmatic nucleus</li>
            <li>Arcuate nucleus</li>
            <li>Ventromedial nucleus</li>
            <li>Lateral hypothalamic area</li>
            <li>Mammillary bodies</li>
          </ul>
        `,

        physiology: `
          <h2>Hypothalamic Physiology</h2>

          <p>
            The hypothalamus is a major homeostatic control centre and connects the nervous
            system with the endocrine system.
          </p>

          <ul>
            <li>Regulates body temperature.</li>
            <li>Regulates thirst and water balance.</li>
            <li>Regulates appetite and energy balance.</li>
            <li>Controls pituitary hormone secretion.</li>
            <li>Coordinates autonomic responses.</li>
            <li>Regulates circadian rhythms.</li>
            <li>Participates in reproductive function.</li>
            <li>Contributes to emotional and behavioural responses.</li>
          </ul>
        `,

        biochemistry: `
          <h2>Hypothalamic Hormones</h2>

          <ul>
            <li><strong>TRH:</strong> stimulates TSH release.</li>
            <li><strong>CRH:</strong> stimulates ACTH release.</li>
            <li><strong>GnRH:</strong> stimulates LH and FSH secretion.</li>
            <li><strong>GHRH:</strong> stimulates GH secretion.</li>
            <li><strong>Somatostatin:</strong> inhibits GH secretion.</li>
            <li><strong>Dopamine:</strong> inhibits prolactin secretion.</li>
          </ul>
        `,

        pathology: `
          <h2>Hypothalamic Disorders</h2>

          <p>
            Damage to the hypothalamus may produce disturbances of temperature regulation,
            appetite, thirst, sleep, endocrine function and autonomic control.
          </p>

          <ul>
            <li>Central diabetes insipidus</li>
            <li>Sleep-wake disturbances</li>
            <li>Obesity or abnormal appetite</li>
            <li>Hypothalamic endocrine dysfunction</li>
            <li>Temperature dysregulation</li>
          </ul>
        `,

        clinical: `
          <h2>Hypothalamic Clinical Correlations</h2>

          <p>
            The hypothalamus acts as the interface between neural control and hormonal control.
            Lesions can therefore produce both neurological and endocrine manifestations.
          </p>
        `,

        histology: `
          <h2>Hypothalamic Histology</h2>

          <p>
            The hypothalamus contains specialized populations of neurosecretory neurons and
            other neurons organized into distinct nuclei.
          </p>
        `
      }
    }
  ]
};