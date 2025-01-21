module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/components/Sidebar.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-modal/lib/index.js [app-ssr] (ecmascript)");
;
;
;
const Sidebar = ({ setMenuItem })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuItems = [
        'Treino_Abdomen',
        'Treino_Bicpes',
        'Treino_Costas',
        'Treino_Ombro',
        'Treino_Peito',
        'Treino_Pernas',
        'Treino_Triceps'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "lg:hidden p-4 text-white bg-blue-600 rounded-md",
                children: "☰"
            }, void 0, false, {
                fileName: "[project]/app/components/Sidebar.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-gray-800 bg-opacity-75 lg:static lg:bg-transparent lg:w-64 w-0 transition-all ${isOpen ? 'w-64' : 'w-0'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center p-4 lg:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white font-bold",
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Sidebar.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "text-white text-2xl",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Sidebar.js",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Sidebar.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "p-4 space-y-2",
                        children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-white cursor-pointer py-2 px-4 hover:bg-gray-700 rounded",
                                onClick: ()=>setMenuItem(item),
                                children: item
                            }, item, false, {
                                fileName: "[project]/app/components/Sidebar.js",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Sidebar.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Sidebar.js",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Sidebar.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Sidebar;
}}),
"[project]/app/components/ExercicioList.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-modal/lib/index.js [app-ssr] (ecmascript)");
;
;
;
// Modal Wrapper Styles
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].setAppElement('#__next'); // Para prevenir alertas de acessibilidade
const ExercicioList = ({ treino })=>{
    const [modalIsOpen, setModalIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoUrl, setVideoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const exerciciosPorTreino = {
        Treino_Abdomen: [
            {
                nome: 'Abdominal Canivete',
                videoUrl: '/Treino_Abdomen/Abdominal_canivete.mp4'
            },
            {
                nome: 'Prancha',
                videoUrl: '/Treino_Abdomen/Prancha.mp4'
            }
        ],
        Treino_Bicpes: [
            {
                nome: 'Rosca Direta',
                videoUrl: '/Treino_Bicpes/Rosca_Direta.mp4'
            },
            {
                nome: 'Rosca Alternada',
                videoUrl: '/Treino_Bicpes/Rosca_Alternada.mp4'
            }
        ]
    };
    const exercicios = exerciciosPorTreino[treino] || [];
    const openModal = (videoUrl)=>{
        setVideoUrl(videoUrl);
        setModalIsOpen(true);
    };
    const closeModal = ()=>{
        setModalIsOpen(false);
        setVideoUrl('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:ml-64 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold mb-4",
                children: treino
            }, void 0, false, {
                fileName: "[project]/app/components/ExercicioList.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: exercicios.map((exercicio, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "mb-4 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg font-medium",
                                children: exercicio.nome
                            }, void 0, false, {
                                fileName: "[project]/app/components/ExercicioList.js",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>openModal(exercicio.videoUrl),
                                className: "ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",
                                children: "Ver Vídeo"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ExercicioList.js",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/components/ExercicioList.js",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/ExercicioList.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$modal$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: modalIsOpen,
                onRequestClose: closeModal,
                contentLabel: "Vídeo do Exercício",
                className: "modal-content",
                overlayClassName: "modal-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closeModal,
                            className: "absolute top-2 right-2 text-white text-2xl",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ExercicioList.js",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            controls: true,
                            className: "w-full max-w-lg mx-auto mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: videoUrl,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ExercicioList.js",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                "Seu navegador não suporta o formato de vídeo."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ExercicioList.js",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ExercicioList.js",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ExercicioList.js",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ExercicioList.js",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ExercicioList;
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/Sidebar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ExercicioList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/ExercicioList.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Home = ()=>{
    const [menuItem, setMenuItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Treino_Abdomen');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Sidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                setMenuItem: setMenuItem
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ExercicioList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                treino: menuItem
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Home;
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}}),
"[project]/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
            return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
            if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch($$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch(type){
                            case REACT_ASYNC_MODE_TYPE:
                            case REACT_CONCURRENT_MODE_TYPE:
                            case REACT_FRAGMENT_TYPE:
                            case REACT_PROFILER_TYPE:
                            case REACT_STRICT_MODE_TYPE:
                            case REACT_SUSPENSE_TYPE:
                                return type;
                            default:
                                var $$typeofType = type && type.$$typeof;
                                switch($$typeofType){
                                    case REACT_CONTEXT_TYPE:
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_LAZY_TYPE:
                                    case REACT_MEMO_TYPE:
                                    case REACT_PROVIDER_TYPE:
                                        return $$typeofType;
                                    default:
                                        return $$typeof;
                                }
                        }
                    case REACT_PORTAL_TYPE:
                        return $$typeof;
                }
            }
            return undefined;
        } // AsyncMode is deprecated along with isAsyncMode
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated
        function isAsyncMode(object) {
            {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
                    console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
    })();
}
}}),
"[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/react-is/cjs/react-is.development.js [app-ssr] (ecmascript)");
}
}}),
"[project]/node_modules/object-assign/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ 'use strict';
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++){
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from){
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++){
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
}}),
"[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;
}}),
"[project]/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}}),
"[project]/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var ReactPropTypesSecret = __turbopack_require__("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
    var loggedTypeFailures = {};
    var has = __turbopack_require__("[project]/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if ("TURBOPACK compile-time truthy", 1) {
        for(var typeSpecName in typeSpecs){
            if (has(typeSpecs, typeSpecName)) {
                var error;
                // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.
                try {
                    // This is intentionally an invariant that gets caught. It's the same
                    // behavior as without this statement except with a better message.
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                        var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                        err.name = 'Invariant Violation';
                        throw err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (error && !(error instanceof Error)) {
                    printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
                }
                if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    // Only monitor this failure once because there tends to be a lot of the
                    // same error.
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : '';
                    printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
                }
            }
        }
    }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */ checkPropTypes.resetWarningCache = function() {
    if (("TURBOPACK compile-time value", "development") !== 'production') {
        loggedTypeFailures = {};
    }
};
module.exports = checkPropTypes;
}}),
"[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var ReactIs = __turbopack_require__("[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var assign = __turbopack_require__("[project]/node_modules/object-assign/index.js [app-ssr] (ecmascript)");
var ReactPropTypesSecret = __turbopack_require__("[project]/node_modules/prop-types/lib/ReactPropTypesSecret.js [app-ssr] (ecmascript)");
var has = __turbopack_require__("[project]/node_modules/prop-types/lib/has.js [app-ssr] (ecmascript)");
var checkPropTypes = __turbopack_require__("[project]/node_modules/prop-types/checkPropTypes.js [app-ssr] (ecmascript)");
var printWarning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
}
function emptyFunctionThatReturnsNull() {
    return null;
}
module.exports = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */ var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
    /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */ function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
            return iteratorFn;
        }
    }
    /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */ var ANONYMOUS = '<<anonymous>>';
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
    };
    /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */ /*eslint-disable no-self-compare*/ function is(x, y) {
        // SameValue algorithm
        if (x === y) {
            // Steps 1-5, 7-10
            // Steps 6.b-6.e: +0 != -0
            return x !== 0 || 1 / x === 1 / y;
        } else {
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
    }
    /*eslint-enable no-self-compare*/ /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */ function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
                if (throwOnDirectAccess) {
                    // New behavior only for users of `prop-types` package
                    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                    err.name = 'Invariant Violation';
                    throw err;
                } else if (("TURBOPACK compile-time value", "development") !== 'production' && typeof console !== 'undefined') {
                    // Old behavior for people using React.PropTypes
                    var cacheKey = componentName + ':' + propName;
                    if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                    manualPropTypeWarningCount < 3) {
                        printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                        manualPropTypeCallCache[cacheKey] = true;
                        manualPropTypeWarningCount++;
                    }
                }
            }
            if (props[propName] == null) {
                if (isRequired) {
                    if (props[propName] === null) {
                        return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
                    }
                    return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
                }
                return null;
            } else {
                return validate(props, propName, componentName, location, propFullName);
            }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
                // `propValue` being instance of, say, date/regexp, pass the 'object'
                // check, but we can offer a more precise error message here rather than
                // 'of type `object`'.
                var preciseType = getPreciseType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
                    expectedType: expectedType
                });
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for(var i = 0; i < propValue.length; i++){
                var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
                if (error instanceof Error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
                var propType = getPropType(propValue);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
                var expectedClassName = expectedClass.name || ANONYMOUS;
                var actualClassName = getClassName(props[propName]);
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (arguments.length > 1) {
                    printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
                } else {
                    printWarning('Invalid argument supplied to oneOf, expected an array.');
                }
            }
            return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for(var i = 0; i < expectedValues.length; i++){
                if (is(propValue, expectedValues[i])) {
                    return null;
                }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                var type = getPreciseType(value);
                if (type === 'symbol') {
                    return String(value);
                }
                return value;
            });
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== 'function') {
                return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for(var key in propValue){
                if (has(propValue, key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                        return error;
                    }
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
            ("TURBOPACK compile-time truthy", 1) ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : ("TURBOPACK unreachable", undefined);
            return emptyFunctionThatReturnsNull;
        }
        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== 'function') {
                printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
                return emptyFunctionThatReturnsNull;
            }
        }
        function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                var checker = arrayOfTypeCheckers[i];
                var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                if (checkerResult == null) {
                    return null;
                }
                if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
                    expectedTypes.push(checkerResult.data.expectedType);
                }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for(var key in shapeTypes){
                var checker = shapeTypes[key];
                if (typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
                return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            // We need to check all keys in case some are required but missing from props.
            var allKeys = assign({}, props[propName], shapeTypes);
            for(var key in allKeys){
                var checker = shapeTypes[key];
                if (has(shapeTypes, key) && typeof checker !== 'function') {
                    return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                }
                if (!checker) {
                    return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
                }
                var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
                if (error) {
                    return error;
                }
            }
            return null;
        }
        return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
        switch(typeof propValue){
            case 'number':
            case 'string':
            case 'undefined':
                return true;
            case 'boolean':
                return !propValue;
            case 'object':
                if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                }
                if (propValue === null || isValidElement(propValue)) {
                    return true;
                }
                var iteratorFn = getIteratorFn(propValue);
                if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                        while(!(step = iterator.next()).done){
                            if (!isNode(step.value)) {
                                return false;
                            }
                        }
                    } else {
                        // Iterator will provide entry [k,v] tuples rather than values.
                        while(!(step = iterator.next()).done){
                            var entry = step.value;
                            if (entry) {
                                if (!isNode(entry[1])) {
                                    return false;
                                }
                            }
                        }
                    }
                } else {
                    return false;
                }
                return true;
            default:
                return false;
        }
    }
    function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
            return true;
        }
        // falsy value can't be a Symbol
        if (!propValue) {
            return false;
        }
        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
            return true;
        }
        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
            return true;
        }
        return false;
    }
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
            return 'array';
        }
        if (propValue instanceof RegExp) {
            // Old webkits (at least until Android 4.0) return 'function' rather than
            // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
            // passes PropTypes.object.
            return 'object';
        }
        if (isSymbol(propType, propValue)) {
            return 'symbol';
        }
        return propType;
    }
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
            return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
            if (propValue instanceof Date) {
                return 'date';
            } else if (propValue instanceof RegExp) {
                return 'regexp';
            }
        }
        return propType;
    }
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch(type){
            case 'array':
            case 'object':
                return 'an ' + type;
            case 'boolean':
            case 'date':
            case 'regexp':
                return 'a ' + type;
            default:
                return type;
        }
    }
    // Returns class name of the object, if any.
    function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
        }
        return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
};
}}),
"[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if ("TURBOPACK compile-time truthy", 1) {
    var ReactIs = __turbopack_require__("[project]/node_modules/react-is/index.js [app-ssr] (ecmascript)");
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __turbopack_require__("[project]/node_modules/prop-types/factoryWithTypeCheckers.js [app-ssr] (ecmascript)")(ReactIs.isElement, throwOnDirectAccess);
} else {
    "TURBOPACK unreachable";
}
}}),
"[project]/node_modules/react-modal/lib/helpers/tabbable.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */ var DISPLAY_NONE = "none";
var DISPLAY_CONTENTS = "contents";
// match the whole word to prevent fuzzy searching
var tabbableNode = /^(input|select|textarea|button|object|iframe)$/;
function isNotOverflowing(element, style) {
    return style.getPropertyValue("overflow") !== "visible" || // if 'overflow: visible' set, check if there is actually any overflow
    element.scrollWidth <= 0 && element.scrollHeight <= 0;
}
function hidesContents(element) {
    var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
    // If the node is empty, this is good enough
    if (zeroSize && !element.innerHTML) return true;
    try {
        // Otherwise we need to check some styles
        var style = window.getComputedStyle(element);
        var displayValue = style.getPropertyValue("display");
        return zeroSize ? displayValue !== DISPLAY_CONTENTS && isNotOverflowing(element, style) : displayValue === DISPLAY_NONE;
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.warn("Failed to inspect element style");
        return false;
    }
}
function visible(element) {
    var parentElement = element;
    var rootNode = element.getRootNode && element.getRootNode();
    while(parentElement){
        if (parentElement === document.body) break;
        // if we are not hidden yet, skip to checking outside the Web Component
        if (rootNode && parentElement === rootNode) parentElement = rootNode.host.parentNode;
        if (hidesContents(parentElement)) return false;
        parentElement = parentElement.parentNode;
    }
    return true;
}
function focusable(element, isTabIndexNotNaN) {
    var nodeName = element.nodeName.toLowerCase();
    var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
    return res && visible(element);
}
function tabbable(element) {
    var tabIndex = element.getAttribute("tabindex");
    if (tabIndex === null) tabIndex = undefined;
    var isTabIndexNaN = isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}
function findTabbableDescendants(element) {
    var descendants = [].slice.call(element.querySelectorAll("*"), 0).reduce(function(finished, el) {
        return finished.concat(!el.shadowRoot ? [
            el
        ] : findTabbableDescendants(el.shadowRoot));
    }, []);
    return descendants.filter(tabbable);
}
module.exports = exports["default"];
}}),
"[project]/node_modules/react-modal/lib/helpers/focusManager.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetState = resetState;
exports.log = log;
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;
var _tabbable = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/tabbable.js [app-ssr] (ecmascript)");
var _tabbable2 = _interopRequireDefault(_tabbable);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;
/* eslint-disable no-console */ /* istanbul ignore next */ function resetState() {
    focusLaterElements = [];
}
/* istanbul ignore next */ function log() {
    if ("TURBOPACK compile-time truthy", 1) {
        console.log("focusManager ----------");
        focusLaterElements.forEach(function(f) {
            var check = f || {};
            console.log(check.nodeName, check.className, check.id);
        });
        console.log("end focusManager ----------");
    }
}
/* eslint-enable no-console */ function handleBlur() {
    needToFocus = true;
}
function handleFocus() {
    if (needToFocus) {
        needToFocus = false;
        if (!modalElement) {
            return;
        }
        // need to see how jQuery shims document.on('focusin') so we don't need the
        // setTimeout, firefox doesn't support focusin, if it did, we could focus
        // the element outside of a setTimeout. Side-effect of this implementation
        // is that the document.body gets focus, and then we focus our element right
        // after, seems fine.
        setTimeout(function() {
            if (modalElement.contains(document.activeElement)) {
                return;
            }
            var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
            el.focus();
        }, 0);
    }
}
function markForFocusLater() {
    focusLaterElements.push(document.activeElement);
}
/* eslint-disable no-console */ function returnFocus() {
    var preventScroll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var toFocus = null;
    try {
        if (focusLaterElements.length !== 0) {
            toFocus = focusLaterElements.pop();
            toFocus.focus({
                preventScroll: preventScroll
            });
        }
        return;
    } catch (e) {
        console.warn([
            "You tried to return focus to",
            toFocus,
            "but it is not in the DOM anymore"
        ].join(" "));
    }
}
/* eslint-enable no-console */ function popWithoutFocus() {
    focusLaterElements.length > 0 && focusLaterElements.pop();
}
function setupScopedFocus(element) {
    modalElement = element;
    if (window.addEventListener) {
        window.addEventListener("blur", handleBlur, false);
        document.addEventListener("focus", handleFocus, true);
    } else {
        window.attachEvent("onBlur", handleBlur);
        document.attachEvent("onFocus", handleFocus);
    }
}
function teardownScopedFocus() {
    modalElement = null;
    if (window.addEventListener) {
        window.removeEventListener("blur", handleBlur);
        document.removeEventListener("focus", handleFocus);
    } else {
        window.detachEvent("onBlur", handleBlur);
        document.detachEvent("onFocus", handleFocus);
    }
}
}}),
"[project]/node_modules/react-modal/lib/helpers/scopeTab.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = scopeTab;
var _tabbable = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/tabbable.js [app-ssr] (ecmascript)");
var _tabbable2 = _interopRequireDefault(_tabbable);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getActiveElement() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    return el.activeElement.shadowRoot ? getActiveElement(el.activeElement.shadowRoot) : el.activeElement;
}
function scopeTab(node, event) {
    var tabbable = (0, _tabbable2.default)(node);
    if (!tabbable.length) {
        // Do nothing, since there are no elements that can receive focus.
        event.preventDefault();
        return;
    }
    var target = void 0;
    var shiftKey = event.shiftKey;
    var head = tabbable[0];
    var tail = tabbable[tabbable.length - 1];
    var activeElement = getActiveElement();
    // proceed with default browser behavior on tab.
    // Focus on last element on shift + tab.
    if (node === activeElement) {
        if (!shiftKey) return;
        target = tail;
    }
    if (tail === activeElement && !shiftKey) {
        target = head;
    }
    if (head === activeElement && shiftKey) {
        target = tail;
    }
    if (target) {
        event.preventDefault();
        target.focus();
        return;
    }
    // Safari radio issue.
    //
    // Safari does not move the focus to the radio button,
    // so we need to force it to really walk through all elements.
    //
    // This is very error prone, since we are trying to guess
    // if it is a safari browser from the first occurence between
    // chrome or safari.
    //
    // The chrome user agent contains the first ocurrence
    // as the 'chrome/version' and later the 'safari/version'.
    var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
    var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    // If we are not in safari desktop, let the browser control
    // the focus
    if (!isSafariDesktop) return;
    var x = tabbable.indexOf(activeElement);
    if (x > -1) {
        x += shiftKey ? -1 : 1;
    }
    target = tabbable[x];
    // If the tabbable element does not exist,
    // focus head/tail based on shiftKey
    if (typeof target === "undefined") {
        event.preventDefault();
        target = shiftKey ? tail : head;
        target.focus();
        return;
    }
    event.preventDefault();
    target.focus();
}
module.exports = exports["default"];
}}),
"[project]/node_modules/warning/warning.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */ var __DEV__ = ("TURBOPACK compile-time value", "development") !== 'production';
var warning = function() {};
if ("TURBOPACK compile-time truthy", 1) {
    var printWarning = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for(var key = 1; key < len; key++){
            args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
            console.error(message);
        }
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    warning = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for(var key = 2; key < len; key++){
            args[key - 2] = arguments[key];
        }
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
            printWarning.apply(null, [
                format
            ].concat(args));
        }
    };
}
module.exports = warning;
}}),
"[project]/node_modules/exenv/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/ /* global define */ (function() {
    'use strict';
    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    var ExecutionEnvironment = {
        canUseDOM: canUseDOM,
        canUseWorkers: typeof Worker !== 'undefined',
        canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
        canUseViewport: canUseDOM && !!window.screen
    };
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        ((r)=>r !== undefined && __turbopack_export_value__(r))(function() {
            return ExecutionEnvironment;
        }(__turbopack_require__, exports, module));
    } else if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        module.exports = ExecutionEnvironment;
    } else {
        window.ExecutionEnvironment = ExecutionEnvironment;
    }
})();
}}),
"[project]/node_modules/react-modal/lib/helpers/safeHTMLElement.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.canUseDOM = exports.SafeNodeList = exports.SafeHTMLCollection = undefined;
var _exenv = __turbopack_require__("[project]/node_modules/exenv/index.js [app-ssr] (ecmascript)");
var _exenv2 = _interopRequireDefault(_exenv);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var EE = _exenv2.default;
var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
var SafeHTMLCollection = exports.SafeHTMLCollection = EE.canUseDOM ? window.HTMLCollection : {};
var SafeNodeList = exports.SafeNodeList = EE.canUseDOM ? window.NodeList : {};
var canUseDOM = exports.canUseDOM = EE.canUseDOM;
exports.default = SafeHTMLElement;
}}),
"[project]/node_modules/react-modal/lib/helpers/ariaAppHider.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetState = resetState;
exports.log = log;
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
var _warning = __turbopack_require__("[project]/node_modules/warning/warning.js [app-ssr] (ecmascript)");
var _warning2 = _interopRequireDefault(_warning);
var _safeHTMLElement = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/safeHTMLElement.js [app-ssr] (ecmascript)");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var globalElement = null;
/* eslint-disable no-console */ /* istanbul ignore next */ function resetState() {
    if (globalElement) {
        if (globalElement.removeAttribute) {
            globalElement.removeAttribute("aria-hidden");
        } else if (globalElement.length != null) {
            globalElement.forEach(function(element) {
                return element.removeAttribute("aria-hidden");
            });
        } else {
            document.querySelectorAll(globalElement).forEach(function(element) {
                return element.removeAttribute("aria-hidden");
            });
        }
    }
    globalElement = null;
}
/* istanbul ignore next */ function log() {
    if ("TURBOPACK compile-time truthy", 1) {
        var check = globalElement || {};
        console.log("ariaAppHider ----------");
        console.log(check.nodeName, check.className, check.id);
        console.log("end ariaAppHider ----------");
    }
}
/* eslint-enable no-console */ function assertNodeList(nodeList, selector) {
    if (!nodeList || !nodeList.length) {
        throw new Error("react-modal: No elements were found for selector " + selector + ".");
    }
}
function setElement(element) {
    var useElement = element;
    if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
        var el = document.querySelectorAll(useElement);
        assertNodeList(el, useElement);
        useElement = el;
    }
    globalElement = useElement || globalElement;
    return globalElement;
}
function validateElement(appElement) {
    var el = appElement || globalElement;
    if (el) {
        return Array.isArray(el) || el instanceof HTMLCollection || el instanceof NodeList ? el : [
            el
        ];
    } else {
        (0, _warning2.default)(false, [
            "react-modal: App element is not defined.",
            "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
            "This is needed so screen readers don't see main content",
            "when modal is opened. It is not recommended, but you can opt-out",
            "by setting `ariaHideApp={false}`."
        ].join(" "));
        return [];
    }
}
function hide(appElement) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        for(var _iterator = validateElement(appElement)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var el = _step.value;
            el.setAttribute("aria-hidden", "true");
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function show(appElement) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
    try {
        for(var _iterator2 = validateElement(appElement)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var el = _step2.value;
            el.removeAttribute("aria-hidden");
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}
function documentNotReadyOrSSRTesting() {
    globalElement = null;
}
}}),
"[project]/node_modules/react-modal/lib/helpers/classList.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetState = resetState;
exports.log = log;
var htmlClassList = {};
var docBodyClassList = {};
/* eslint-disable no-console */ /* istanbul ignore next */ function removeClass(at, cls) {
    at.classList.remove(cls);
}
/* istanbul ignore next */ function resetState() {
    var htmlElement = document.getElementsByTagName("html")[0];
    for(var cls in htmlClassList){
        removeClass(htmlElement, htmlClassList[cls]);
    }
    var body = document.body;
    for(var _cls in docBodyClassList){
        removeClass(body, docBodyClassList[_cls]);
    }
    htmlClassList = {};
    docBodyClassList = {};
}
/* istanbul ignore next */ function log() {
    if ("TURBOPACK compile-time truthy", 1) {
        var classes = document.getElementsByTagName("html")[0].className;
        var buffer = "Show tracked classes:\n\n";
        buffer += "<html /> (" + classes + "):\n  ";
        for(var x in htmlClassList){
            buffer += "  " + x + " " + htmlClassList[x] + "\n  ";
        }
        classes = document.body.className;
        buffer += "\n\ndoc.body (" + classes + "):\n  ";
        for(var _x in docBodyClassList){
            buffer += "  " + _x + " " + docBodyClassList[_x] + "\n  ";
        }
        buffer += "\n";
        console.log(buffer);
    }
}
/* eslint-enable no-console */ /**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */ var incrementReference = function incrementReference(poll, className) {
    if (!poll[className]) {
        poll[className] = 0;
    }
    poll[className] += 1;
    return className;
};
/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */ var decrementReference = function decrementReference(poll, className) {
    if (poll[className]) {
        poll[className] -= 1;
    }
    return className;
};
/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */ var trackClass = function trackClass(classListRef, poll, classes) {
    classes.forEach(function(className) {
        incrementReference(poll, className);
        classListRef.add(className);
    });
};
/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */ var untrackClass = function untrackClass(classListRef, poll, classes) {
    classes.forEach(function(className) {
        decrementReference(poll, className);
        poll[className] === 0 && classListRef.remove(className);
    });
};
/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */ var add = exports.add = function add(element, classString) {
    return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */ var remove = exports.remove = function remove(element, classString) {
    return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
}}),
"[project]/node_modules/react-modal/lib/helpers/portalOpenInstances.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.log = log;
exports.resetState = resetState;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
// Tracks portals that are open and emits events to subscribers
var PortalOpenInstances = function PortalOpenInstances() {
    var _this = this;
    _classCallCheck(this, PortalOpenInstances);
    this.register = function(openInstance) {
        if (_this.openInstances.indexOf(openInstance) !== -1) {
            if ("TURBOPACK compile-time truthy", 1) {
                // eslint-disable-next-line no-console
                console.warn("React-Modal: Cannot register modal instance that's already open");
            }
            return;
        }
        _this.openInstances.push(openInstance);
        _this.emit("register");
    };
    this.deregister = function(openInstance) {
        var index = _this.openInstances.indexOf(openInstance);
        if (index === -1) {
            if ("TURBOPACK compile-time truthy", 1) {
                // eslint-disable-next-line no-console
                console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
            }
            return;
        }
        _this.openInstances.splice(index, 1);
        _this.emit("deregister");
    };
    this.subscribe = function(callback) {
        _this.subscribers.push(callback);
    };
    this.emit = function(eventType) {
        _this.subscribers.forEach(function(subscriber) {
            return subscriber(eventType, // shallow copy to avoid accidental mutation
            _this.openInstances.slice());
        });
    };
    this.openInstances = [];
    this.subscribers = [];
};
var portalOpenInstances = new PortalOpenInstances();
/* eslint-disable no-console */ /* istanbul ignore next */ function log() {
    console.log("portalOpenInstances ----------");
    console.log(portalOpenInstances.openInstances.length);
    portalOpenInstances.openInstances.forEach(function(p) {
        return console.log(p);
    });
    console.log("end portalOpenInstances ----------");
}
/* istanbul ignore next */ function resetState() {
    portalOpenInstances = new PortalOpenInstances();
}
/* eslint-enable no-console */ exports.default = portalOpenInstances;
}}),
"[project]/node_modules/react-modal/lib/helpers/bodyTrap.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetState = resetState;
exports.log = log;
var _portalOpenInstances = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/portalOpenInstances.js [app-ssr] (ecmascript)");
var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Body focus trap see Issue #742
var before = void 0, after = void 0, instances = [];
/* eslint-disable no-console */ /* istanbul ignore next */ function resetState() {
    var _arr = [
        before,
        after
    ];
    for(var _i = 0; _i < _arr.length; _i++){
        var item = _arr[_i];
        if (!item) continue;
        item.parentNode && item.parentNode.removeChild(item);
    }
    before = after = null;
    instances = [];
}
/* istanbul ignore next */ function log() {
    console.log("bodyTrap ----------");
    console.log(instances.length);
    var _arr2 = [
        before,
        after
    ];
    for(var _i2 = 0; _i2 < _arr2.length; _i2++){
        var item = _arr2[_i2];
        var check = item || {};
        console.log(check.nodeName, check.className, check.id);
    }
    console.log("edn bodyTrap ----------");
}
/* eslint-enable no-console */ function focusContent() {
    if (instances.length === 0) {
        if ("TURBOPACK compile-time truthy", 1) {
            // eslint-disable-next-line no-console
            console.warn("React-Modal: Open instances > 0 expected");
        }
        return;
    }
    instances[instances.length - 1].focusContent();
}
function bodyTrap(eventType, openInstances) {
    if (!before && !after) {
        before = document.createElement("div");
        before.setAttribute("data-react-modal-body-trap", "");
        before.style.position = "absolute";
        before.style.opacity = "0";
        before.setAttribute("tabindex", "0");
        before.addEventListener("focus", focusContent);
        after = before.cloneNode();
        after.addEventListener("focus", focusContent);
    }
    instances = openInstances;
    if (instances.length > 0) {
        // Add focus trap
        if (document.body.firstChild !== before) {
            document.body.insertBefore(before, document.body.firstChild);
        }
        if (document.body.lastChild !== after) {
            document.body.appendChild(after);
        }
    } else {
        // Remove focus trap
        if (before.parentElement) {
            before.parentElement.removeChild(before);
        }
        if (after.parentElement) {
            after.parentElement.removeChild(after);
        }
    }
}
_portalOpenInstances2.default.subscribe(bodyTrap);
}}),
"[project]/node_modules/react-modal/lib/components/ModalPortal.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _propTypes = __turbopack_require__("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _focusManager = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/focusManager.js [app-ssr] (ecmascript)");
var focusManager = _interopRequireWildcard(_focusManager);
var _scopeTab = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/scopeTab.js [app-ssr] (ecmascript)");
var _scopeTab2 = _interopRequireDefault(_scopeTab);
var _ariaAppHider = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/ariaAppHider.js [app-ssr] (ecmascript)");
var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
var _classList = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/classList.js [app-ssr] (ecmascript)");
var classList = _interopRequireWildcard(_classList);
var _safeHTMLElement = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/safeHTMLElement.js [app-ssr] (ecmascript)");
var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
var _portalOpenInstances = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/portalOpenInstances.js [app-ssr] (ecmascript)");
var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);
__turbopack_require__("[project]/node_modules/react-modal/lib/helpers/bodyTrap.js [app-ssr] (ecmascript)");
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
// so that our CSS is statically analyzable
var CLASS_NAMES = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
};
/**
 * We need to support the deprecated `KeyboardEvent.keyCode` in addition to
 * `KeyboardEvent.code` for apps that still support IE11. Can be removed when
 * `react-modal` only supports React >18 (which dropped IE support).
 */ var isTabKey = function isTabKey(event) {
    return event.code === "Tab" || event.keyCode === 9;
};
var isEscKey = function isEscKey(event) {
    return event.code === "Escape" || event.keyCode === 27;
};
var ariaHiddenInstances = 0;
var ModalPortal = function(_Component) {
    _inherits(ModalPortal, _Component);
    function ModalPortal(props) {
        _classCallCheck(this, ModalPortal);
        var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));
        _this.setOverlayRef = function(overlay) {
            _this.overlay = overlay;
            _this.props.overlayRef && _this.props.overlayRef(overlay);
        };
        _this.setContentRef = function(content) {
            _this.content = content;
            _this.props.contentRef && _this.props.contentRef(content);
        };
        _this.afterClose = function() {
            var _this$props = _this.props, appElement = _this$props.appElement, ariaHideApp = _this$props.ariaHideApp, htmlOpenClassName = _this$props.htmlOpenClassName, bodyOpenClassName = _this$props.bodyOpenClassName, parentSelector = _this$props.parentSelector;
            var parentDocument = parentSelector && parentSelector().ownerDocument || document;
            // Remove classes.
            bodyOpenClassName && classList.remove(parentDocument.body, bodyOpenClassName);
            htmlOpenClassName && classList.remove(parentDocument.getElementsByTagName("html")[0], htmlOpenClassName);
            // Reset aria-hidden attribute if all modals have been removed
            if (ariaHideApp && ariaHiddenInstances > 0) {
                ariaHiddenInstances -= 1;
                if (ariaHiddenInstances === 0) {
                    ariaAppHider.show(appElement);
                }
            }
            if (_this.props.shouldFocusAfterRender) {
                if (_this.props.shouldReturnFocusAfterClose) {
                    focusManager.returnFocus(_this.props.preventScroll);
                    focusManager.teardownScopedFocus();
                } else {
                    focusManager.popWithoutFocus();
                }
            }
            if (_this.props.onAfterClose) {
                _this.props.onAfterClose();
            }
            _portalOpenInstances2.default.deregister(_this);
        };
        _this.open = function() {
            _this.beforeOpen();
            if (_this.state.afterOpen && _this.state.beforeClose) {
                clearTimeout(_this.closeTimer);
                _this.setState({
                    beforeClose: false
                });
            } else {
                if (_this.props.shouldFocusAfterRender) {
                    focusManager.setupScopedFocus(_this.node);
                    focusManager.markForFocusLater();
                }
                _this.setState({
                    isOpen: true
                }, function() {
                    _this.openAnimationFrame = requestAnimationFrame(function() {
                        _this.setState({
                            afterOpen: true
                        });
                        if (_this.props.isOpen && _this.props.onAfterOpen) {
                            _this.props.onAfterOpen({
                                overlayEl: _this.overlay,
                                contentEl: _this.content
                            });
                        }
                    });
                });
            }
        };
        _this.close = function() {
            if (_this.props.closeTimeoutMS > 0) {
                _this.closeWithTimeout();
            } else {
                _this.closeWithoutTimeout();
            }
        };
        _this.focusContent = function() {
            return _this.content && !_this.contentHasFocus() && _this.content.focus({
                preventScroll: true
            });
        };
        _this.closeWithTimeout = function() {
            var closesAt = Date.now() + _this.props.closeTimeoutMS;
            _this.setState({
                beforeClose: true,
                closesAt: closesAt
            }, function() {
                _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
            });
        };
        _this.closeWithoutTimeout = function() {
            _this.setState({
                beforeClose: false,
                isOpen: false,
                afterOpen: false,
                closesAt: null
            }, _this.afterClose);
        };
        _this.handleKeyDown = function(event) {
            if (isTabKey(event)) {
                (0, _scopeTab2.default)(_this.content, event);
            }
            if (_this.props.shouldCloseOnEsc && isEscKey(event)) {
                event.stopPropagation();
                _this.requestClose(event);
            }
        };
        _this.handleOverlayOnClick = function(event) {
            if (_this.shouldClose === null) {
                _this.shouldClose = true;
            }
            if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
                if (_this.ownerHandlesClose()) {
                    _this.requestClose(event);
                } else {
                    _this.focusContent();
                }
            }
            _this.shouldClose = null;
        };
        _this.handleContentOnMouseUp = function() {
            _this.shouldClose = false;
        };
        _this.handleOverlayOnMouseDown = function(event) {
            if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
                event.preventDefault();
            }
        };
        _this.handleContentOnClick = function() {
            _this.shouldClose = false;
        };
        _this.handleContentOnMouseDown = function() {
            _this.shouldClose = false;
        };
        _this.requestClose = function(event) {
            return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
        };
        _this.ownerHandlesClose = function() {
            return _this.props.onRequestClose;
        };
        _this.shouldBeClosed = function() {
            return !_this.state.isOpen && !_this.state.beforeClose;
        };
        _this.contentHasFocus = function() {
            return document.activeElement === _this.content || _this.content.contains(document.activeElement);
        };
        _this.buildClassName = function(which, additional) {
            var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
                base: CLASS_NAMES[which],
                afterOpen: CLASS_NAMES[which] + "--after-open",
                beforeClose: CLASS_NAMES[which] + "--before-close"
            };
            var className = classNames.base;
            if (_this.state.afterOpen) {
                className = className + " " + classNames.afterOpen;
            }
            if (_this.state.beforeClose) {
                className = className + " " + classNames.beforeClose;
            }
            return typeof additional === "string" && additional ? className + " " + additional : className;
        };
        _this.attributesFromObject = function(prefix, items) {
            return Object.keys(items).reduce(function(acc, name) {
                acc[prefix + "-" + name] = items[name];
                return acc;
            }, {});
        };
        _this.state = {
            afterOpen: false,
            beforeClose: false
        };
        _this.shouldClose = null;
        _this.moveFromContentToOverlay = null;
        return _this;
    }
    _createClass(ModalPortal, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.isOpen) {
                    this.open();
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                if ("TURBOPACK compile-time truthy", 1) {
                    if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
                        // eslint-disable-next-line no-console
                        console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
                    }
                    if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
                        // eslint-disable-next-line no-console
                        console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
                    }
                }
                if (this.props.isOpen && !prevProps.isOpen) {
                    this.open();
                } else if (!this.props.isOpen && prevProps.isOpen) {
                    this.close();
                }
                // Focus only needs to be set once when the modal is being opened
                if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
                    this.focusContent();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.state.isOpen) {
                    this.afterClose();
                }
                clearTimeout(this.closeTimer);
                cancelAnimationFrame(this.openAnimationFrame);
            }
        },
        {
            key: "beforeOpen",
            value: function beforeOpen() {
                var _props = this.props, appElement = _props.appElement, ariaHideApp = _props.ariaHideApp, htmlOpenClassName = _props.htmlOpenClassName, bodyOpenClassName = _props.bodyOpenClassName, parentSelector = _props.parentSelector;
                var parentDocument = parentSelector && parentSelector().ownerDocument || document;
                // Add classes.
                bodyOpenClassName && classList.add(parentDocument.body, bodyOpenClassName);
                htmlOpenClassName && classList.add(parentDocument.getElementsByTagName("html")[0], htmlOpenClassName);
                if (ariaHideApp) {
                    ariaHiddenInstances += 1;
                    ariaAppHider.hide(appElement);
                }
                _portalOpenInstances2.default.register(this);
            }
        },
        {
            key: "render",
            value: function render() {
                var _props2 = this.props, id = _props2.id, className = _props2.className, overlayClassName = _props2.overlayClassName, defaultStyles = _props2.defaultStyles, children = _props2.children;
                var contentStyles = className ? {} : defaultStyles.content;
                var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;
                if (this.shouldBeClosed()) {
                    return null;
                }
                var overlayProps = {
                    ref: this.setOverlayRef,
                    className: this.buildClassName("overlay", overlayClassName),
                    style: _extends({}, overlayStyles, this.props.style.overlay),
                    onClick: this.handleOverlayOnClick,
                    onMouseDown: this.handleOverlayOnMouseDown
                };
                var contentProps = _extends({
                    id: id,
                    ref: this.setContentRef,
                    style: _extends({}, contentStyles, this.props.style.content),
                    className: this.buildClassName("content", className),
                    tabIndex: "-1",
                    onKeyDown: this.handleKeyDown,
                    onMouseDown: this.handleContentOnMouseDown,
                    onMouseUp: this.handleContentOnMouseUp,
                    onClick: this.handleContentOnClick,
                    role: this.props.role,
                    "aria-label": this.props.contentLabel
                }, this.attributesFromObject("aria", _extends({
                    modal: true
                }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
                    "data-testid": this.props.testId
                });
                var contentElement = this.props.contentElement(contentProps, children);
                return this.props.overlayElement(overlayProps, contentElement);
            }
        }
    ]);
    return ModalPortal;
}(_react.Component);
ModalPortal.defaultProps = {
    style: {
        overlay: {},
        content: {}
    },
    defaultStyles: {}
};
ModalPortal.propTypes = {
    isOpen: _propTypes2.default.bool.isRequired,
    defaultStyles: _propTypes2.default.shape({
        content: _propTypes2.default.object,
        overlay: _propTypes2.default.object
    }),
    style: _propTypes2.default.shape({
        content: _propTypes2.default.object,
        overlay: _propTypes2.default.object
    }),
    className: _propTypes2.default.oneOfType([
        _propTypes2.default.string,
        _propTypes2.default.object
    ]),
    overlayClassName: _propTypes2.default.oneOfType([
        _propTypes2.default.string,
        _propTypes2.default.object
    ]),
    parentSelector: _propTypes2.default.func,
    bodyOpenClassName: _propTypes2.default.string,
    htmlOpenClassName: _propTypes2.default.string,
    ariaHideApp: _propTypes2.default.bool,
    appElement: _propTypes2.default.oneOfType([
        _propTypes2.default.instanceOf(_safeHTMLElement2.default),
        _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection),
        _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList),
        _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))
    ]),
    onAfterOpen: _propTypes2.default.func,
    onAfterClose: _propTypes2.default.func,
    onRequestClose: _propTypes2.default.func,
    closeTimeoutMS: _propTypes2.default.number,
    shouldFocusAfterRender: _propTypes2.default.bool,
    shouldCloseOnOverlayClick: _propTypes2.default.bool,
    shouldReturnFocusAfterClose: _propTypes2.default.bool,
    preventScroll: _propTypes2.default.bool,
    role: _propTypes2.default.string,
    contentLabel: _propTypes2.default.string,
    aria: _propTypes2.default.object,
    data: _propTypes2.default.object,
    children: _propTypes2.default.node,
    shouldCloseOnEsc: _propTypes2.default.bool,
    overlayRef: _propTypes2.default.func,
    contentRef: _propTypes2.default.func,
    id: _propTypes2.default.string,
    overlayElement: _propTypes2.default.func,
    contentElement: _propTypes2.default.func,
    testId: _propTypes2.default.string
};
exports.default = ModalPortal;
module.exports = exports["default"];
}}),
"[project]/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "polyfill": (()=>polyfill)
});
function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) {
        this.setState(state);
    }
}
function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
    try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally{
        this.props = prevProps;
        this.state = prevState;
    }
}
// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
    var prototype = Component.prototype;
    if (!prototype || !prototype.isReactComponent) {
        throw new Error('Can only polyfill class components');
    }
    if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
        return Component;
    }
    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === 'function') {
        foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }
    if (typeof prototype.componentWillUpdate === 'function') {
        foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
        var componentName = Component.displayName || Component.name;
        var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
        throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
    }
    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
        prototype.componentWillMount = componentWillMount;
        prototype.componentWillReceiveProps = componentWillReceiveProps;
    }
    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
        if (typeof prototype.componentDidUpdate !== 'function') {
            throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
        }
        prototype.componentWillUpdate = componentWillUpdate;
        var componentDidUpdate = prototype.componentDidUpdate;
        prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
            // 16.3+ will not execute our will-update method;
            // It will pass a snapshot value to did-update though.
            // Older versions will require our polyfilled will-update value.
            // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
            // Because for <= 15.x versions this might be a "prevContext" object.
            // We also can't just check "__reactInternalSnapshot",
            // Because get-snapshot might return a falsy value.
            // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
            var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
            componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
    }
    return Component;
}
;
}}),
"[project]/node_modules/react-modal/lib/components/Modal.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _react2 = _interopRequireDefault(_react);
var _reactDom = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var _reactDom2 = _interopRequireDefault(_reactDom);
var _propTypes = __turbopack_require__("[project]/node_modules/prop-types/index.js [app-ssr] (ecmascript)");
var _propTypes2 = _interopRequireDefault(_propTypes);
var _ModalPortal = __turbopack_require__("[project]/node_modules/react-modal/lib/components/ModalPortal.js [app-ssr] (ecmascript)");
var _ModalPortal2 = _interopRequireDefault(_ModalPortal);
var _ariaAppHider = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/ariaAppHider.js [app-ssr] (ecmascript)");
var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
var _safeHTMLElement = __turbopack_require__("[project]/node_modules/react-modal/lib/helpers/safeHTMLElement.js [app-ssr] (ecmascript)");
var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
var _reactLifecyclesCompat = __turbopack_require__("[project]/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js [app-ssr] (ecmascript)");
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";
var isReact16 = _safeHTMLElement.canUseDOM && _reactDom2.default.createPortal !== undefined;
var createHTMLElement = function createHTMLElement(name) {
    return document.createElement(name);
};
var getCreatePortal = function getCreatePortal() {
    return isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
};
function getParentElement(parentSelector) {
    return parentSelector();
}
var Modal = function(_Component) {
    _inherits(Modal, _Component);
    function Modal() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, Modal);
        for(var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [
            this
        ].concat(args))), _this), _this.removePortal = function() {
            !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
            var parent = getParentElement(_this.props.parentSelector);
            if (parent && parent.contains(_this.node)) {
                parent.removeChild(_this.node);
            } else {
                // eslint-disable-next-line no-console
                console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
            }
        }, _this.portalRef = function(ref) {
            _this.portal = ref;
        }, _this.renderPortal = function(props) {
            var createPortal = getCreatePortal();
            var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({
                defaultStyles: Modal.defaultStyles
            }, props)), _this.node);
            _this.portalRef(portal);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(Modal, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (!_safeHTMLElement.canUseDOM) return;
                if (!isReact16) {
                    this.node = createHTMLElement("div");
                }
                this.node.className = this.props.portalClassName;
                var parent = getParentElement(this.props.parentSelector);
                parent.appendChild(this.node);
                !isReact16 && this.renderPortal(this.props);
            }
        },
        {
            key: "getSnapshotBeforeUpdate",
            value: function getSnapshotBeforeUpdate(prevProps) {
                var prevParent = getParentElement(prevProps.parentSelector);
                var nextParent = getParentElement(this.props.parentSelector);
                return {
                    prevParent: prevParent,
                    nextParent: nextParent
                };
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, _, snapshot) {
                if (!_safeHTMLElement.canUseDOM) return;
                var _props = this.props, isOpen = _props.isOpen, portalClassName = _props.portalClassName;
                if (prevProps.portalClassName !== portalClassName) {
                    this.node.className = portalClassName;
                }
                var prevParent = snapshot.prevParent, nextParent = snapshot.nextParent;
                if (nextParent !== prevParent) {
                    prevParent.removeChild(this.node);
                    nextParent.appendChild(this.node);
                }
                // Stop unnecessary renders if modal is remaining closed
                if (!prevProps.isOpen && !isOpen) return;
                !isReact16 && this.renderPortal(this.props);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;
                var state = this.portal.state;
                var now = Date.now();
                var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);
                if (closesAt) {
                    if (!state.beforeClose) {
                        this.portal.closeWithTimeout();
                    }
                    setTimeout(this.removePortal, closesAt - now);
                } else {
                    this.removePortal();
                }
            }
        },
        {
            key: "render",
            value: function render() {
                if (!_safeHTMLElement.canUseDOM || !isReact16) {
                    return null;
                }
                if (!this.node && isReact16) {
                    this.node = createHTMLElement("div");
                }
                var createPortal = getCreatePortal();
                return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
                    ref: this.portalRef,
                    defaultStyles: Modal.defaultStyles
                }, this.props)), this.node);
            }
        }
    ], [
        {
            key: "setAppElement",
            value: function setAppElement(element) {
                ariaAppHider.setElement(element);
            }
        }
    ]);
    return Modal;
}(_react.Component);
Modal.propTypes = {
    isOpen: _propTypes2.default.bool.isRequired,
    style: _propTypes2.default.shape({
        content: _propTypes2.default.object,
        overlay: _propTypes2.default.object
    }),
    portalClassName: _propTypes2.default.string,
    bodyOpenClassName: _propTypes2.default.string,
    htmlOpenClassName: _propTypes2.default.string,
    className: _propTypes2.default.oneOfType([
        _propTypes2.default.string,
        _propTypes2.default.shape({
            base: _propTypes2.default.string.isRequired,
            afterOpen: _propTypes2.default.string.isRequired,
            beforeClose: _propTypes2.default.string.isRequired
        })
    ]),
    overlayClassName: _propTypes2.default.oneOfType([
        _propTypes2.default.string,
        _propTypes2.default.shape({
            base: _propTypes2.default.string.isRequired,
            afterOpen: _propTypes2.default.string.isRequired,
            beforeClose: _propTypes2.default.string.isRequired
        })
    ]),
    appElement: _propTypes2.default.oneOfType([
        _propTypes2.default.instanceOf(_safeHTMLElement2.default),
        _propTypes2.default.instanceOf(_safeHTMLElement.SafeHTMLCollection),
        _propTypes2.default.instanceOf(_safeHTMLElement.SafeNodeList),
        _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(_safeHTMLElement2.default))
    ]),
    onAfterOpen: _propTypes2.default.func,
    onRequestClose: _propTypes2.default.func,
    closeTimeoutMS: _propTypes2.default.number,
    ariaHideApp: _propTypes2.default.bool,
    shouldFocusAfterRender: _propTypes2.default.bool,
    shouldCloseOnOverlayClick: _propTypes2.default.bool,
    shouldReturnFocusAfterClose: _propTypes2.default.bool,
    preventScroll: _propTypes2.default.bool,
    parentSelector: _propTypes2.default.func,
    aria: _propTypes2.default.object,
    data: _propTypes2.default.object,
    role: _propTypes2.default.string,
    contentLabel: _propTypes2.default.string,
    shouldCloseOnEsc: _propTypes2.default.bool,
    overlayRef: _propTypes2.default.func,
    contentRef: _propTypes2.default.func,
    id: _propTypes2.default.string,
    overlayElement: _propTypes2.default.func,
    contentElement: _propTypes2.default.func
};
Modal.defaultProps = {
    isOpen: false,
    portalClassName: portalClassName,
    bodyOpenClassName: bodyOpenClassName,
    role: "dialog",
    ariaHideApp: true,
    closeTimeoutMS: 0,
    shouldFocusAfterRender: true,
    shouldCloseOnEsc: true,
    shouldCloseOnOverlayClick: true,
    shouldReturnFocusAfterClose: true,
    preventScroll: false,
    parentSelector: function parentSelector() {
        return document.body;
    },
    overlayElement: function overlayElement(props, contentEl) {
        return _react2.default.createElement("div", props, contentEl);
    },
    contentElement: function contentElement(props, children) {
        return _react2.default.createElement("div", props, children);
    }
};
Modal.defaultStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.75)"
    },
    content: {
        position: "absolute",
        top: "40px",
        left: "40px",
        right: "40px",
        bottom: "40px",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        padding: "20px"
    }
};
(0, _reactLifecyclesCompat.polyfill)(Modal);
if ("TURBOPACK compile-time truthy", 1) {
    Modal.setCreateHTMLElement = function(fn) {
        return createHTMLElement = fn;
    };
}
exports.default = Modal;
}}),
"[project]/node_modules/react-modal/lib/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _Modal = __turbopack_require__("[project]/node_modules/react-modal/lib/components/Modal.js [app-ssr] (ecmascript)");
var _Modal2 = _interopRequireDefault(_Modal);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _Modal2.default;
module.exports = exports["default"];
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__81d4d0._.js.map