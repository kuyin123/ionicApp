// Generated by typings
// Source: https://raw.githubusercontent.com/wujun4code/typed-chart.js/6d86e2c801cfd55c452842546d1b3bef91525462/index.d.ts
declare module 'chart.js' {
// Generated by typings
// Type definitions for chart.js v2.1.4
// Definitions by: Wu Jun <wujun4code@github>
// Typed it,enjoy it!

class Chart {
    constructor(ctx: CanvasRenderingContext2D, options?: any);

    static Line(ctx: CanvasRenderingContext2D, options?: any): Chart;

    static Bar(ctx: CanvasRenderingContext2D, options?: any): Chart;

    static Bubble(ctx: CanvasRenderingContext2D, options?: any): Chart;

    static Doughnut(ctx: CanvasRenderingContext2D, options?: any): Chart;

    static PolarArea(ctx: CanvasRenderingContext2D, options?: any): Chart;

    static Radar(ctx: CanvasRenderingContext2D, options?: any): Chart;
}
namespace Chart {
    export interface ChartDataSet {
        label: string;
        fillColor: string;
        strokeColor: string;

        /* Line, Radar */
        pointColor?: string;
        pointStrokeColor?: string;
        pointHighlightFill?: string;
        pointHighlightStroke?: string;

        /* Bar */
        highlightFill?: string;
        highlightStroke?: string;
        data: number[];
    }
    export interface LinearChartData {
        labels: string[];
        datasets: ChartDataSet[];
        xAxisID?: string;
        yAxisID?: string;
        fill?: boolean;
        lineTension?: number;
        backgroundColor?: string;
        borderWidth?: number;
        borderColor?: string;
        borderCapStyle?: string;
        borderDash?: number[];
        borderDashOffset?: number;
        borderJoinStyle?: string;
        pointBorderColor?: string[];
        pointBorderWidth?: number[];
        pointRadius?: number[];
        pointHoverRadius?: number[];
        pointHitRadius?: number[];
        pointHoverBackgroundColor?: string[];
        pointHoverBorderColor?: string[];
        pointHoverBorderWidth?: number[];
        pointStyle?: any
    }

    export interface CircularChartData {
        value: number;
        color?: string;
        highlight?: string;
        label?: string;
    }

    export interface ChartSettings {
        animation?: boolean;
        animationSteps?: number;
        animationEasing?: string;
        showScale?: boolean;
        scaleOverride?: boolean;
        scaleSteps?: number;
        scaleStepWidth?: number;
        scaleStartValue?: number;
        scaleLineColor?: string;
        scaleLineWidth?: number;
        scaleShowLabels?: boolean;
        scaleLabel?: string;
        scaleIntegersOnly?: boolean;
        scaleBeginAtZero?: boolean;
        scaleFontFamily?: string;
        scaleFontSize?: number;
        scaleFontStyle?: string;
        scaleFontColor?: string;
        responsive?: boolean;
        maintainAspectRatio?: boolean;
        showTooltips?: boolean;
        tooltipEvents?: string[];
        tooltipFillColor?: string;
        tooltipFontFamily?: string;
        tooltipFontSize?: number;
        tooltipFontStyle?: string;
        tooltipFontColor?: string;
        tooltipTitleFontFamily?: string;
        tooltipTitleFontSize?: number;
        tooltipTitleFontStyle?: string;
        tooltipTitleFontColor?: string;
        tooltipYPadding?: number;
        tooltipXPadding?: number;
        tooltipCaretSize?: number;
        tooltipCornerRadius?: number;
        tooltipXOffset?: number;
        tooltipTemplate?: string;
        multiTooltipTemplate?: string;
        onAnimationProgress?: () => any;
        onAnimationComplete?: () => any;
    }

    export interface ChartOptions extends ChartSettings {
        scaleShowGridLines?: boolean;
        scaleGridLineColor?: string;
        scaleGridLineWidth?: number;
        scaleShowHorizontalLines?: boolean;
        scaleShowVerticalLines?: boolean;
        legendTemplate?: string;
    }

    export interface PointsAtEvent {
        value: number;
        label: string;
        datasetLabel: string;
        strokeColor: string;
        fillColor: string;
        highlightFill: string;
        highlightStroke: string;
        x: number;
        y: number;
    }

    export interface ChartInstance {
        clear: () => void;
        stop: () => void;
        resize: () => void;
        destroy: () => void;
        toBase64Image: () => string;
        generateLegend: () => string;
    }

    export interface LinearInstance extends ChartInstance {
        getPointsAtEvent: (event: Event) => PointsAtEvent[];
        update: () => void;
        addData: (valuesArray: number[], label: string) => void;
        removeData: (index?: number) => void;
    }

    export interface CircularInstance extends ChartInstance {
        getSegmentsAtEvent: (event: Event) => {}[];
        update: () => void;
        addData: (valuesArray: CircularChartData, index?: number) => void;
        removeData: (index: number) => void;
        segments: Array<CircularChartData>;
    }

    export interface LineChartOptions extends ChartOptions {
        bezierCurve?: boolean;
        bezierCurveTension?: number;
        pointDot?: boolean;
        pointDotRadius?: number;
        pointDotStrokeWidth?: number;
        pointHitDetectionRadius?: number;
        datasetStroke?: boolean;
        datasetStrokeWidth?: number;
        datasetFill?: boolean;
    }

    export interface BarChartOptions extends ChartOptions {
        scaleBeginAtZero?: boolean;
        barShowStroke?: boolean;
        barStrokeWidth?: number;
        barValueSpacing?: number;
        barDatasetSpacing?: number;
    }

    export interface RadarChartOptions extends ChartSettings {
        scaleShowLine?: boolean;
        angleShowLineOut?: boolean;
        scaleShowLabels?: boolean;
        scaleBeginAtZero?: boolean;
        angleLineColor?: string;
        angleLineWidth?: number;
        pointLabelFontFamily?: string;
        pointLabelFontStyle?: string;
        pointLabelFontSize?: number;
        pointLabelFontColor?: string;
        pointDot?: boolean;
        pointDotRadius?: number;
        pointDotStrokeWidth?: number;
        pointHitDetectionRadius?: number;
        datasetStroke?: boolean;
        datasetStrokeWidth?: number;
        datasetFill?: boolean;
        legendTemplate?: string;
    }

    export interface PolarAreaChartOptions extends ChartSettings {
        scaleShowLabelBackdrop?: boolean;
        scaleBackdropColor?: string;
        scaleBeginAtZero?: boolean;
        scaleBackdropPaddingY?: number;
        scaleBackdropPaddingX?: number;
        scaleShowLine?: boolean;
        segmentShowStroke?: boolean;
        segmentStrokeColor?: string;
        segmentStrokeWidth?: number;
        animationSteps?: number;
        animationEasing?: string;
        animateRotate?: boolean;
        animateScale?: boolean;
        legendTemplate?: string;
    }

    export interface PieChartOptions extends ChartSettings {
        segmentShowStroke?: boolean;
        segmentStrokeColor?: string;
        segmentStrokeWidth?: number;
        percentageInnerCutout?: number;
        animationSteps?: number;
        animationEasing?: string;
        animateRotate?: boolean;
        animateScale?: boolean;
        legendTemplate?: string;
    }
}

export = Chart;
}
