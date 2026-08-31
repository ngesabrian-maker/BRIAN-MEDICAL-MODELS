export const thymusLymph =  {
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
    }