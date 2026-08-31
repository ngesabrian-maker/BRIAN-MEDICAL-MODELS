export const pituitary = {
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
    };