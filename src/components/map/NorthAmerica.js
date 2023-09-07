import './WideMap.css';

function NorthAmerica({ countries, onCountryHover }) {

  return (
    <div>
      <svg id="mapsection" baseprofile="tiny" fill="#ececec" height="684" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width=".1" version="1.2" viewbox="0 0 1000 684" width="1000" xmlns="http://www.w3.org/2000/svg">
        <path id="BS" title="Bahamas" class="land" d="M257.86,395.2l-0.69,0.15l-0.71,-1.76l-1.05,-0.89l0.61,-1.95l0.84,0.12l0.98,2.55L257.86,395.2zM257.06,386.51l-3.06,0.5l-0.2,-1.15l1.32,-0.25l1.85,0.09L257.06,386.51zM259.36,386.48l-0.48,2.21l-0.52,-0.4l0.05,-1.62l-1.26,-1.23l-0.01,-0.36L259.36,386.48z"/>
        <path id="BZ" title="Belize" class="land" d="M225.31,412.96L225.29,412.53L225.63,412.39L226.14,412.74L227.14,410.97L227.67,410.93L227.68,411.36L228.21,411.37L228.17,412.17L227.71,413.44L227.96,413.89L227.67,414.94L227.84,415.21L227.52,416.69L226.97,417.46L226.46,417.55L225.91,418.55L225.07,418.55L225.29,415.27z"/>
        <path id="CA" title="Canada" class="land" d="M198.93,96.23l-0.22,-5.9l3.63,0.58l1.63,0.96l3.35,4.93l-0.76,4.97l-4.15,2.77l-2.28,-3.12L198.93,96.23zM212.14,108.88l0.33,-1.49l-1.97,-2.45l-5.65,-0.19l0.75,3.68l5.25,0.83L212.14,108.88zM248.49,155.83l3.09,5.1l0.81,0.57l3.07,-1.27l3.02,0.2l2.98,0.28l-0.25,-2.64l-4.83,-5.38l-6.42,-1.08l-1.35,0.67L248.49,155.83zM183.06,93.13l-2.71,4.19l6.24,0.52l4.62,4.44l4.58,1.5l-1.09,-5.68l-2.14,-6.73l-7.58,-5.35l-5.5,-2.04l0.2,5.69L183.06,93.13zM208.96,82.9l5.13,-0.12l-2.22,4l-0.04,5.3l3.01,5.76l5.81,1.77l4.96,-0.99l5.18,-10.73l3.85,-4.45l-3.38,-4.97l-2.21,-10.65l-4.6,-3.19l-4.72,-3.68l-3.58,-9.56l-6.52,0.94l1.23,4.15l-2.87,1.25l-1.94,5.32l-1.94,7.46l1.78,7.26L208.96,82.9zM145.21,136.27l3.92,1.95l12.67,-1.3l-5.82,4.77l0.36,3.43l4.26,-0.24l7.07,-4.58l9.49,-1.67l1.71,-5.22l-0.49,-5.57l-2.94,-0.5l-2.5,1.93l-1.1,-4.13l-0.94,-5.7l-2.89,-1.41l-2.57,4.41l4.01,11.05l-4.9,-0.85l-4.98,-6.79l-7.89,-4l-2.64,3.32L145.21,136.27zM167.77,94.21l-3.65,-2.9l-1.5,-0.66l-2.88,4.28l-0.04,2l4.66,0.01L167.77,94.21zM166.31,106.56l0.93,-3.98l-3.95,-2.12l-4.09,1.39l-2.27,4.26l4.16,4.21L166.31,106.56zM195.4,139.8l4.62,-1.11l1.28,-8.25l-0.09,-5.94l-2.14,-5.56l-0.22,1.6l-3.94,-0.7l-4.22,4.09l-3.02,-0.37l0.18,8.92l4.6,-0.87l-0.06,6.47L195.4,139.8zM192.12,185.41l-5.06,-3.93l-4.71,-4.21l-0.87,-6.18l-1.76,-8.93l-3.14,-3.84l-2.79,-1.55l-2.47,1.42l1.99,9.59l-1.41,3.73l-2.29,-8.98l-2.56,-3.1l-3.17,4.81l-3.9,-4.76l-6.24,2.87l1.4,-4.46l-2.86,-1.87l-7.51,5.84l-1.95,3.71l-2.35,6.77l4.9,2.32l4.33,-0.12l-6.5,3.46l1.48,3.13l3.98,0.17l5.99,-0.67l5.42,1.96l-3.66,1.45l-3.95,-0.37l-4.33,1.41l-1.86,0.87l3.46,6.35l2.49,-0.88l3.83,2.15l1.52,3.65l4.99,-0.72l7.11,-1.16l5.26,-2.65l3.26,-0.48l4.82,2.12l5.07,1.22l0.95,-2.86l-1.79,-3.05l4.6,-0.64L192.12,185.41zM199.86,184.43l-1.96,3.54l-2.47,2.49l3.83,3.54l2.28,-0.85l3.78,2.36l1.74,-2.73l-1.71,-3.03l-0.84,-1.53l-1.68,-1.46L199.86,184.43zM182.25,154.98l-2.13,-2.17l-3.76,0.4l-0.95,1.38l4.37,6.75L182.25,154.98zM210.94,168.15l3.01,-6.93l3.34,-1.85l4.19,-8.74l-5.36,-2.47l-5.84,-0.36l-2.78,2.77l-1.46,4.23l-0.04,4.82l1.75,8.19L210.94,168.15zM228.09,145.15l5.76,-0.18l8.04,-1.61l3.59,1.27l4.18,-2.26l1.75,-2.84l-0.63,-4.52l-3,-4.23l-4.56,-0.8l-5.71,0.97l-4.46,2.44l-4.09,-0.94l-3.78,-0.49l-1.78,-2.7l-3.22,-2.61l0.64,-4.43l-2.42,-3.98l-5.52,0.03l-3.11,-3.99l-5.78,-0.8l-1.05,5.1l3.25,3.75l5.8,1.45l2.82,5.1l0.34,5.6l0.97,5.99l7.45,3.42L228.09,145.15zM139.07,126.88l5.21,-5.05l2.62,-0.59l2.16,-4.23l0.39,-9.77l-3.85,1.91l-4.3,-0.18l-5.76,8.19l-4.76,8.98l3.8,2.51L139.07,126.88zM211.25,143.05l1.53,-4.14l-1.02,-3.46l-2.45,-3.92l-4.03,3.02l-1.49,4.92l3.4,2.79L211.25,143.05zM202.94,154.49l-0.73,-2.88l-5,1.26l-3.34,-2.11l-3.32,4.8l3.09,6.28l-5.72,-1.17l-0.06,3.01l6.97,7.05l1.94,3.38l2.7,0.73l4.6,-3.41l0.5,-8.21l-4.24,-4.07L202.94,154.49zM128.95,308.23l-1.16,-2.34l-2.8,-1.77l-1.39,-2.05l-0.95,-1.5l-2.63,-0.46l-1.72,-0.67l-2.94,-0.96l-0.24,1.02l1.08,2.38l2.89,0.78l0.51,1.23l2.51,1.5l0.84,1.51l4.6,1.92L128.95,308.23zM250.66,230.6l-2,-2.11l-2.06,0.5l-0.25,-3.06l-3.21,-2.03l-3.07,-2.27l-1.63,-1.75l-1.43,1.03l-0.52,-2.96l-2.03,-0.56l-0.96,6.13l-0.36,5.11l-2.44,3.14l3.8,-0.6l0.96,3.65l3.99,-3.22l2.78,-3.38l1.58,2.86l4.36,1.51L250.66,230.6zM130.12,178.06l7.38,-4.18v-3.87l3.48,-6.41l6.88,-6.69l3.53,-2.47l-3.01,-4.2l-2.72,-2.95l-7.16,-0.57l-4,-2.16l-9.48,1.63l2.74,6.23l-2.43,6.43l-1.94,6.87l-1.2,3.86l6.47,4.69L130.12,178.06zM264.36,205.36l0.32,-1.01l-0.03,-3.17l-2.19,-2.08l-2.57,1.05l-1.19,4.17l0.7,3.56l3.14,-0.36L264.36,205.36zM288.18,212.9l4.41,6.6l3.45,2.86l4.92,-7.87l0.87,-4.93l-4.41,-0.47l-4.03,-6.7l-4.45,-1.64l-6.6,-4.97l5.15,-3.63l-2.65,-7.54l-2.44,-3.35l-6.77,-3.35l-2.92,-5.55l-5.21,1.99l-0.36,-3.86l-3.86,-4.32l-6.22,-4.71l-2.65,3.71l-5.55,2.66l0.42,-6.06l-4.81,-10.05l-7.11,4.06l-2.59,7.7l-2.21,-5.92l2.06,-6.37l-7.24,2.65l-2.88,3.99l-2.15,8.42l0.89,9.05l3.98,0.04l-2.93,3.92l2.33,2.96l4.55,1.25l5.93,2.42l10.2,1.82l5.08,-1.04l1.5,-2.42l2.21,2.79l2.47,0.46l2.97,4.97l-1.8,1.98l5.68,2.63l4.3,3.68l1.08,2.55l0.77,3.24l-3.63,6.93l-0.98,3.44l0.94,2.42l-5.77,0.86l-5.27,0.12l-1.85,4.87l2.37,2.23l8.11,-1.03l-0.04,-1.89l4.08,3.15l4.18,3.28l-0.98,1.77l3.4,3.02l6.02,3.54l7.6,2.39l-0.46,-2.09l-2.92,-3.67l-3.96,-5.37l7.03,5l3.54,1.66l0.97,-4.44l-1.82,-6.3l-1.15,-1.73l-3.81,-3.03l-2.95,-3.91l0.35,-3.94L288.18,212.9zM222.35,51.34l2.34,7.29l4.96,5.88l9.81,-1.09l6.31,1.97l-4.37,6.05l-2.21,-1.78l-7.66,-0.71l1.19,8.31l3.96,6.04l-0.79,5.2l-4.97,3.46l-2.27,5.47l4.55,2.65l3.82,8.55l-7.5,-5.7l-1.71,0.94l1.38,9.38l-5.18,2.83l0.35,5.85l5.3,0.63l4.17,1.44l8.24,-1.84l7.33,3.27l7.49,-7.19l-0.06,-3.02l-4.79,0.48l-0.39,-2.84l3.92,-3.83l1.33,-5.15l4.33,-3.83l2.66,-4.76l-2.32,-7.1l1.94,-2.65l-3.86,-1.89l8.49,-1.63l1.79,-3.15l5.78,-2.6l4.8,-13.47l4.57,-4.94l6.62,-11.12l-6.1,0.1l2.54,-4.3l6.78,-3.99l6.84,-8.9l0.12,-5.73l-5.13,-6.04l-6.02,-2.93l-7.49,-1.82l-6.07,-1.49l-6.07,-1.5l-8.1,3.98l-1.49,-2.53l-8.57,0.98l-5.03,2.57l-3.7,3.65L242.03,30.5L239,24.52l-3.48,-1.14l-4.12,7.97l-5.5,3.35l-3.27,0.66l-4.17,3.84l0.61,6.65L222.35,51.34zM296.75,316.34l-0.98,-1.98l-1.06,1.26l0.7,1.36l3.56,1.71l1.04,-0.26l1.38,-1.66l-2.6,0.11L296.75,316.34zM239.75,238.48l0.61,1.63l1.98,0.14l3.28,-3.34l0.06,-1.19l-3.85,-0.06L239.75,238.48zM301.88,304.92l-2.87,-1.8l-3.69,-1.09l-0.97,0.37l2.61,2.04l3.63,1.34l1.37,-0.08L301.88,304.92zM326.77,309.71l-0.36,-2.23l-1.96,0.72l0.87,-3.11l-2.8,-1.32l-1.29,1.05l-2.49,-1.18l0.98,-1.51l-1.88,-0.93l-1.83,1.47l1.86,-3.82l1.5,-2.8l0.54,-1.22l-1.3,-0.2l-2.43,1.55l-1.74,2.53l-2.9,6.92l-2.35,2.56l1.22,1.14l-1.75,1.47l0.43,1.23l5.44,0.13l3.01,-0.25l2.69,1l-1.98,1.93l1.67,0.14l3.25,-3.58l0.78,0.53l-0.61,3.37l1.84,0.77l1.27,-0.15l1.18,-3.61L326.77,309.71zM305.57,314.48l-2.81,4.56l-4.63,0.58l-3.64,-2.01l-0.91,-3.07l-0.89,-4.46l2.65,-2.83l-2.48,-2.09l-4.19,0.43l-5.88,3.53l-4.5,5.45l-2.38,0.67l3.23,-3.8l4.04,-5.57l3.58,-1.9l2.35,-3.11l2.9,-0.3l4.21,0.03l6,0.92l4.74,-0.71l3.53,-3.62l4.62,-1.59l2.01,-1.58l2.04,-1.71l-0.2,-5.19l-1.13,-1.77l-2.18,-0.63l-1.11,-4.05l-1.8,-1.55l-4.47,-1.26l-2.52,-2.82l-3.73,-2.83l1.13,-3.2l-3.1,-6.26l-3.65,-6.89l-2.18,-4.98l-1.85,2.61l-2.68,6.05l-4.06,2.97l-2.03,-3.15l-2.56,-0.85l-0.93,-6.99l0.08,-4.8l-5,-0.44l-0.85,-2.27l-3.45,-3.44l-2.61,-2.04l-2.32,1.58l-2.88,-0.58l-4.81,-1.65l-1.95,1.4l0.94,9.18l1.22,5.12l-3.31,5.75l3.41,4.02l1.9,4.44l0.23,3.42l-1.55,3.5l-3.18,3.46l-4.49,2.28l1.98,2.53l1.46,7.4l-1.52,4.68l-2.16,1.46l-4.17,-4.28l-2.03,-5.17l-0.87,-4.76l0.46,-4.19l-3.05,-0.47l-4.63,-0.28l-2.97,-2.08l-3.51,-1.37l-2.01,-2.38l-2.8,-1.93l-5.21,-2.23l-3.92,1.02l-1.31,-3.95l-1.26,-4.99l-4.12,-0.9l0.16,-6.41l1.09,-4.48l3.04,-6.6l3.43,-4.9l3.26,-0.77l0.19,-4.05l2.21,-2.68l4.01,-0.42l3.25,-4.39l0.82,-2.9l2.7,-5.72l0.84,-3.5l2.9,2.11l3.9,-1.08l5.49,-4.96l0.36,-3.54l-1.98,-3.98l2.09,-4.06l-0.17,-3.86l-3.76,-3.95l-4.14,-1.19l-3.98,-0.62l-0.15,8.71l-2.04,6.56l-2.93,5.3l-2.71,-4.95l0.84,-5.61l-3.35,-5.02l-3.75,6.09l0.01,-7.99l-5.21,-1.63l2.49,-4.01l-3.81,-9.59L212,170.54l-3.7,-1.44l-3.31,6.43l-0.22,9.34l3.27,3.29l3,4.91l-1.27,7.71l-2.25,-0.2l-1.78,5.88l0.02,-7l-4.34,-2.58l-2.49,1.34l0.32,4.67l-4.09,-0.18l-4.35,1.17l-4.95,-3.35l-3.13,0.6l-2.82,-4.11l-2.26,-1.84l-2.24,0.77l-3.41,0.36l-1.81,2.61l2.86,3.19l-3.05,3.73l-2.99,-4.42l-2.39,1.3l-7.57,0.87l-5.07,-1.59l3.95,-3.74l-3.78,-3.9l-2.75,0.5l-3.86,-1.32l-6.56,-2.89l-4.29,-3.37l-3.4,-0.47l-1.06,2.36l-3.44,1.31l-0.38,-6.15l-3.73,5.51l-4.74,-7.32l-1.94,-0.89l-0.63,3.91l-2.09,1.9l-1.93,-3.39l-4.59,2.05l-4.2,3.55l-4.16,-0.98l-3.4,2.5l-2.46,3.28l-2.92,-0.72l-4.41,-3.8l-5.23,-1.94l-0.02,27.65l-0.01,35.43l2.76,0.17l2.73,1.56l1.96,2.44l2.49,3.6l2.73,-3.05l2.82,-1.79l1.49,2.86l1.89,2.23l2.57,2.42l1.75,3.79l2.87,5.88l4.77,3.2l0.08,3.12l-1.56,2.36l0.06,2.48l3.39,3.45l0.49,3.76l3.59,1.96l-0.4,2.79l1.56,3.96l5.08,1.83l2,1.89l5.43,4.23l0.38,0.01h7.96h8.32h2.76h8.55h8.27h8.41l8.42,0l9.53,0l9.59,0l5.8,0l0.01,-1.64l0.95,-0.02l0.5,2.35l0.87,0.72l1.96,0.26l2.86,0.67l2.72,1.3l2.27,-0.55l3.45,1.09l1.14,-1.66l1.59,-0.66l0.62,-1.03l0.63,-0.55l2.61,0.86l1.93,0.1l0.67,0.57l0.94,2.38l3.15,0.63l-0.49,1.18l1.11,1.21l-0.48,1.56l1.18,0.51l-0.59,1.37l0.75,0.13l0.53,-0.6l0.55,0.9l2.1,0.5l2.13,0.04l2.27,0.41l2.51,0.78l0.92,1.26l1.82,3.04l-0.9,1.3l-2.28,-0.54l-1.41,-2.44l0.36,2.49l-1.34,2.17l0.15,1.84l-0.23,1.07l-1.81,1.27l-1.32,2.09l-0.62,1.32l1.54,0.24l2.08,-1.2l1.23,-1.06l0.83,-0.17l1.54,0.38l0.75,-0.59l1.37,-0.48l2.44,-0.47v0l0,0l-0.25,-1.15l-0.13,0.04l-0.86,0.2l-1.12,-0.36l0.84,-1.32l0.86,-0.46l1.98,-0.56l2.37,-0.53l1.24,0.73l0.78,-0.85l0.89,-0.54l0.6,0.29l0.03,0.06l2.87,-2.73l1.26,-0.73l4.26,-0.03l5.17,0l0.28,-0.98l0.9,-0.2l1.19,-0.62l1,-1.82l0.86,-3.15l2.14,-3.1l0.93,1.08l1.88,-0.7l1.25,1.19l0,5.53l1.83,2.25l3.12,-0.48l4.49,-0.13l-4.87,3.26l0.11,3.29l2.13,0.28l3.13,-2.79l2.78,-1.58l6.21,-2.35l3.47,-2.62l-1.81,-1.46L305.57,314.48zM251.91,243.37l1.1,-3.12l-0.71,-1.23l-1.15,-0.13l-1.08,1.8l-0.13,0.41l0.74,1.77L251.91,243.37zM109.25,279.8L109.25,279.8l1.56,-2.35L109.25,279.8z"/>
        <path id="CR" title="Costa Rica" class="land" d="M242.63,440.4L241.11,439.77L240.54,439.18L240.86,438.69L240.76,438.07L239.98,437.39L238.88,436.84L237.91,436.48L237.73,435.65L236.99,435.15L237.17,435.97L236.61,436.64L235.97,435.86L235.07,435.58L234.69,435.01L234.71,434.15L235.08,433.25L234.29,432.85L234.93,432.31L235.35,431.94L237.2,432.69L237.84,432.32L238.73,432.56L239.2,433.14L240.02,433.33L240.7,432.73L241.41,434.27L242.49,435.41L243.81,436.62L242.72,436.87L242.74,438.01L243.32,438.42L242.9,438.76L243.01,439.27L242.78,439.84z"/>
        <path id="CU" title="Cuba" class="land" d="M244.59,396.94L247.01,397.16L249.21,397.19L251.84,398.22L252.96,399.33L255.58,398.99L256.57,399.7L258.95,401.56L260.69,402.91L261.61,402.87L263.29,403.48L263.08,404.32L265.15,404.44L267.27,405.66L266.94,406.35L265.07,406.73L263.19,406.88L261.25,406.64L257.24,406.93L259.12,405.27L257.98,404.5L256.17,404.3L255.2,403.44L254.53,401.74L252.95,401.85L250.34,401.05L249.49,400.42L245.84,399.95L244.86,399.36L245.91,398.61L243.16,398.46L241.15,400.02L239.99,400.06L239.58,400.8L238.2,401.13L237,400.84L238.48,399.91L239.08,398.83L240.35,398.15L241.78,397.56L243.91,397.27z"/>
        <path id="DO" title="Dominican Republic" class="land" d="M274.18,407.35L274.53,406.84L276.72,406.86L278.38,407.62L279.12,407.54L279.63,408.59L281.17,408.53L281.07,409.41L282.32,409.52L283.7,410.6L282.66,411.8L281.33,411.16L280.04,411.28L279.12,411.14L278.61,411.68L277.53,411.86L277.11,411.15L276.18,411.57L275.06,413.57L274.33,413.11L274.19,412.27L274.25,411.47L273.53,410.59L274.21,410.09L274.43,408.96z"/>
        <path id="GT" title="Guatemala" class="land" d="M222.64,424.75L221.2,424.25L219.45,424.2L218.17,423.63L216.66,422.45L216.73,421.61L217.05,420.93L216.66,420.39L218.01,418.03L221.6,418.02L221.68,417.04L221.22,416.86L220.91,416.23L219.87,415.56L218.83,414.58L220.1,414.58L220.1,412.93L222.72,412.93L225.31,412.96L225.29,415.27L225.07,418.55L225.91,418.55L226.82,419.08L227.06,418.65L227.88,419.01L226.61,420.12L225.28,420.93L225.08,421.48L225.3,422.05L224.72,422.78L224.06,422.95L224.21,423.29L223.69,423.61L222.73,424.33z"/>
        <path id="HN" title="Honduras" class="land" d="M230.43,426.9L229.95,426.01L229.09,425.76L229.29,424.61L228.91,424.3L228.33,424.1L227.1,424.44L227,424.05L226.15,423.59L225.55,423.02L224.72,422.78L225.3,422.05L225.08,421.48L225.28,420.93L226.61,420.12L227.88,419.01L228.17,419.13L228.79,418.62L229.59,418.58L229.85,418.81L230.29,418.67L231.59,418.93L232.89,418.85L233.79,418.53L234.12,418.21L235.01,418.36L235.68,418.56L236.41,418.49L236.97,418.24L238.25,418.64L238.7,418.7L239.55,419.24L240.36,419.89L241.38,420.34L242.12,421.13L241.16,421.07L240.77,421.46L239.8,421.84L239.09,421.84L238.47,422.21L237.91,422.08L237.43,421.64L237.14,421.72L236.78,422.41L236.51,422.38L236.46,422.98L235.48,423.77L234.97,424.11L234.68,424.47L233.85,423.89L233.25,424.65L232.66,424.63L232,424.7L232.06,426.11L231.65,426.13L231.3,426.79z"/>
        <path id="HT" title="Haiti" class="land" d="M270.04,406.75L271.75,406.88L274.18,407.35L274.43,408.96L274.21,410.09L273.53,410.59L274.25,411.47L274.19,412.27L272.33,411.77L271.01,411.97L269.3,411.76L267.99,412.31L266.48,411.39L266.73,410.45L269.31,410.85L271.43,411.09L272.44,410.44L271.16,409.16L271.18,408.03L269.41,407.57z"/>
        <path id="JM" title="Jamaica" class="land" d="M257.76,410.96L259.65,411.22L261.14,411.93L261.6,412.73L259.63,412.78L258.78,413.27L257.21,412.8L255.61,411.73L255.94,411.06L257.12,410.86z"/>
        <path id="MX" title="Mexico" class="land" d="M202.89,388.72L201.8,391.43L201.31,393.64L201.1,397.72L200.83,399.19L201.32,400.83L202.19,402.3L202.75,404.61L204.61,406.83L205.26,408.51L206.36,409.97L209.34,410.75L210.5,411.97L212.96,411.15L215.09,410.86L217.19,410.33L218.96,409.82L220.74,408.62L221.41,406.9L221.64,404.4L222.13,403.53L224.02,402.74L226.99,402.05L229.47,402.15L231.17,401.9L231.85,402.53L231.75,403.97L230.24,405.74L229.58,407.55L230.09,408.06L229.67,409.34L228.97,411.64L228.26,410.88L227.67,410.93L227.14,410.97L226.14,412.74L225.63,412.39L225.29,412.53L225.31,412.96L222.72,412.93L220.1,412.93L220.1,414.58L218.83,414.58L219.87,415.56L220.91,416.23L221.22,416.86L221.68,417.04L221.6,418.02L218.01,418.03L216.66,420.39L217.05,420.93L216.73,421.61L216.66,422.45L213.49,419.34L212.04,418.4L209.75,417.64L208.19,417.85L205.93,418.94L204.52,419.23L202.54,418.47L200.44,417.91L197.82,416.58L195.72,416.18L192.54,414.82L190.2,413.42L189.49,412.64L187.92,412.47L185.05,411.54L183.88,410.2L180.87,408.53L179.47,406.66L178.8,405.21L179.73,404.92L179.45,404.07L180.09,403.3L180.1,402.26L179.16,400.92L178.9,399.72L177.96,398.2L175.49,395.18L172.67,392.79L171.31,390.88L168.9,389.62L168.39,388.86L168.82,386.94L167.39,386.21L165.73,384.69L165.03,382.5L163.52,382.24L161.9,380.58L160.58,379.03L160.46,378.03L158.95,375.61L157.96,373.13L158,371.88L155.97,370.59L155.04,370.73L153.44,369.83L152.99,371.16L153.45,372.72L153.72,375.15L154.69,376.48L156.77,378.69L157.23,379.44L157.66,379.66L158.03,380.76L158.52,380.71L159.09,382.75L159.94,383.55L160.54,384.66L162.3,386.26L163.23,389.15L164.06,390.5L164.84,391.94L164.99,393.56L166.35,393.66L167.47,395.05L168.49,396.41L168.42,396.95L167.24,398.06L166.74,398.05L166,396.2L164.17,394.47L162.15,392.99L160.71,392.21L160.8,389.96L160.38,388.28L159.04,387.32L157.12,385.93L156.75,386.33L156.04,385.51L154.31,384.76L152.66,382.93L152.86,382.69L154.01,382.87L155.06,381.69L155.16,380.26L153,377.99L151.35,377.1L150.32,375.1L149.28,372.97L147.98,370.36L146.84,367.4L150.03,367.15L153.59,366.79L153.33,367.43L157.56,369.04L163.96,371.35L169.54,371.33L171.76,371.32L171.76,369.97L176.62,369.97L177.64,371.14L179.08,372.17L180.74,373.6L181.67,375.29L182.37,377.05L183.82,378.02L186.15,378.98L187.91,376.45L190.21,376.39L192.18,377.67L193.59,379.85L194.56,381.71L196.21,383.51L196.83,385.7L197.62,387.17L199.8,388.13L201.79,388.81z"/>
        <path id="NI" title="Nicaragua" class="land" d="M234.93,432.31L233.96,431.41L232.65,430.26L232.03,429.3L230.85,428.41L229.44,427.12L229.76,426.68L230.22,427.11L230.43,426.9L231.3,426.79L231.65,426.13L232.06,426.11L232,424.7L232.66,424.63L233.25,424.65L233.85,423.89L234.68,424.47L234.97,424.11L235.48,423.77L236.46,422.98L236.51,422.38L236.78,422.41L237.14,421.72L237.43,421.64L237.91,422.08L238.47,422.21L239.09,421.84L239.8,421.84L240.77,421.46L241.16,421.07L242.12,421.13L241.88,421.41L241.74,422.05L242.02,423.1L241.38,424.08L241.08,425.24L240.99,426.5L241.14,427.23L241.21,428.52L240.78,428.8L240.52,430.02L240.71,430.77L240.14,431.5L240.27,432.26L240.7,432.73L240.02,433.33L239.2,433.14L238.73,432.56L237.84,432.32L237.2,432.69L235.35,431.94z"/>
        <path id="PA" title="Panama" class="land" d="M256.89,443.21L255.95,442.4L255.35,440.88L256.04,440.13L255.33,439.94L254.81,439.01L253.41,438.23L252.19,438.41L251.62,439.39L250.48,440.09L249.87,440.19L249.6,440.78L250.94,442.3L250.17,442.66L249.76,443.08L248.46,443.22L247.97,441.54L247.61,442.02L246.68,441.86L246.12,440.72L244.97,440.54L244.24,440.21L243.04,440.21L242.95,440.82L242.63,440.4L242.78,439.84L243.01,439.27L242.9,438.76L243.32,438.42L242.74,438.01L242.72,436.87L243.81,436.62L244.81,437.63L244.76,438.23L245.87,438.35L246.14,438.12L246.91,438.82L248.29,438.61L249.48,437.9L251.18,437.33L252.14,436.49L253.69,436.65L253.59,436.93L255.15,437.03L256.4,437.52L257.31,438.36L258.37,439.14L258.02,439.56L258.68,441.21L258.15,442.05L257.24,441.85z"/>
        <path id="PR" title="Puerto Rico" class="land" d="M289.41,410.89L290.84,411.15L291.35,411.73L290.63,412.47L288.52,412.45L286.88,412.55L286.71,411.3L287.11,410.87z"/>
        <path id="SV" title="El Salvador" class="land" d="M229.09,425.76L228.78,426.43L227.16,426.39L226.15,426.12L224.99,425.55L223.43,425.37L222.64,424.75L222.73,424.33L223.69,423.61L224.21,423.29L224.06,422.95L224.72,422.78L225.55,423.02L226.15,423.59L227,424.05L227.1,424.44L228.33,424.1L228.91,424.3L229.29,424.61z"/>
        <path id="US" title="United States" class="land" d="M109.25,279.8L109.25,279.8l-1.54,-1.83l-2.47,-1.57l-0.79,-4.36l-3.61,-4.13l-1.51,-4.94l-2.69,-0.34l-4.46,-0.13l-3.29,-1.53l-5.8,-5.64l-2.68,-1.05l-4.9,-1.99l-3.88,0.48l-5.51,-2.59l-3.33,-2.43l-3.11,1.21l0.58,3.93l-1.55,0.36l-3.24,1.16l-2.47,1.86l-3.11,1.16l-0.4,-3.24l1.26,-5.53l2.98,-1.77l-0.77,-1.46l-3.57,3.22l-1.91,3.77l-4.04,3.95l2.05,2.65l-2.65,3.85l-3.01,2.21l-2.81,1.59l-0.69,2.29l-4.38,2.63l-0.89,2.36l-3.28,2.13l-1.92,-0.38l-2.62,1.38l-2.84,1.67l-2.33,1.63l-4.81,1.38l-0.44,-0.81l3.07,-2.27l2.74,-1.51l2.99,-2.71l3.48,-0.56l1.38,-2.06l3.89,-3.05l0.63,-1.03l2.07,-1.83l0.48,-4l1.43,-3.17l-3.23,1.64l-0.9,-0.93l-1.52,1.95l-1.83,-2.73l-0.76,1.94l-1.05,-2.69l-2.8,2.17l-1.72,0l-0.24,-3.23l0.51,-2.02l-1.81,-1.98l-3.65,1.07l-2.37,-2.63l-1.92,-1.36l-0.01,-3.25l-2.16,-2.48l1.09,-3.4l2.29,-3.37l1,-3.15l2.27,-0.45l1.92,0.99l2.26,-3.01l2.04,0.54l2.14,-1.95l-0.52,-2.92l-1.57,-1.16l2.08,-2.52l-1.72,0.08l-2.97,1.43l-0.85,1.43l-2.21,-1.43l-3.97,0.73l-4.11,-1.56l-1.18,-2.65l-3.55,-3.91l3.94,-2.87l6.25,-3.41h2.31l-0.38,3.48l5.92,-0.27l-2.28,-4.34l-3.45,-2.72l-1.99,-3.64l-2.69,-3.17l-3.85,-2.38l1.57,-4.03l4.97,-0.25l3.54,-3.58l0.67,-3.92l2.86,-3.91l2.73,-0.95l5.32,-3.76l2.58,0.57l4.32,-4.61l4.24,1.83l2.03,3.87l1.25,-1.65l4.74,0.51l-0.17,1.95l4.29,1.43l2.86,-0.84l5.91,2.64l5.39,0.78l2.16,1.07l3.73,-1.33l4.25,2.46l3.05,1.14l-0.02,27.65l-0.01,35.43l2.76,0.17l2.73,1.56l1.96,2.44l2.49,3.6l2.73,-3.05l2.82,-1.79l1.49,2.86l1.89,2.23l2.57,2.42l1.75,3.79l2.87,5.88l4.77,3.2l0.08,3.12L109.25,279.8zM285.18,314.24l-1.25,-1.19l-1.88,0.7l-0.93,-1.08l-2.14,3.1l-0.85,3.15l-0.99,1.82l-1.19,0.62l-0.9,0.2l-0.28,0.98l-5.17,0l-4.26,0.03l-1.26,0.73l-2.87,2.73l0.29,0.54l0.17,1.51l-2.1,1.27l-2.3,-0.32l-2.2,-0.14l-1.33,0.44l0.25,1.15l0,0l0.06,0.37l-2.42,2.27l-2.12,1.09l-1.44,0.51l-1.66,1.03l-2.03,0.5l-1.4,-0.19l-1.73,-0.77l0.96,-1.45l0.62,-1.32l1.32,-2.09l-0.14,-1.57l-0.5,-2.24l-1.04,-0.39l-1.74,1.71l-0.56,-0.03l-0.14,-0.97l1.54,-1.56l0.26,-1.79l-0.23,-1.79l-2.08,-1.55l-2.38,-0.8l-0.39,1.52l-0.62,0.41l-0.5,1.95l-0.26,-1.32l-1.12,0.95l-0.7,1.32l-0.73,1.92l-0.14,1.65l0.93,2.38l-0.08,2.51l-1.14,1.84l-0.57,0.52l-0.76,0.41l-0.95,0.02l-0.26,-0.25l-0.75,-1.97l-0.02,-0.98l0.08,-0.94l-0.35,-1.87l0.53,-2.18l0.63,-2.71l1.46,-3.03l-0.42,0.01l-2.06,2.54l-0.38,-0.46l1.1,-1.42l1.67,-2.57l1.91,-0.36l2.19,-0.8l2.21,0.42l0.09,0.02l2.47,-0.36l-1.39,-1.61l-0.75,-0.12l-0.85,-0.16l-0.59,-1.14l-2.75,0.36l-2.49,0.91l-1.97,-1.55l-1.59,-0.52l0.9,-2.17l-2.47,1.37l-2.25,1.33l-2.16,1.04l-1.72,-1.4l-2.81,0.85l0.01,-0.6l1.9,-1.73l1.99,-1.65l2.86,-1.37l-3.45,-1.09l-2.27,0.55l-2.72,-1.3l-2.86,-0.67l-1.96,-0.26l-0.87,-0.72l-0.5,-2.35l-0.95,0.02l-0.01,1.64l-5.8,0l-9.59,0l-9.53,0l-8.42,0h-8.41h-8.27h-8.55h-2.76h-8.32h-7.96l0.95,3.47l0.45,3.41l-0.69,1.09l-1.49,-3.91l-4.05,-1.42l-0.34,0.82l0.82,1.94l0.89,3.53l0.51,5.42l-0.34,3.59l-0.34,3.54l-1.1,3.61l0.9,2.9l0.1,3.2l-0.61,3.06l1.49,1.99l0.39,2.95l2.17,2.99l1.24,1.17l-0.1,0.82l2.34,4.85l2.72,3.45l0.34,1.87l0.72,0.55l2.61,0.33l1,0.91l1.57,0.17l0.31,0.97l1.31,0.4l1.82,1.92l0.47,1.7l3.19,-0.25l3.56,-0.36l-0.26,0.65l4.23,1.6l6.4,2.31l5.58,-0.02l2.22,0l0.01,-1.35l4.86,0l1.02,1.16l1.43,1.03l1.67,1.43l0.93,1.69l0.7,1.77l1.45,0.97l2.33,0.96l1.77,-2.53l2.29,-0.06l1.98,1.28l1.41,2.18l0.97,1.86l1.65,1.8l0.62,2.19l0.79,1.47l2.19,0.96l1.99,0.68l1.09,-0.09l-0.53,-1.05l-0.14,-1.49l0.03,-2.16l0.65,-1.42l1.53,-1.51l2.79,-1.37l2.55,-2.37l2.36,-0.75l1.74,-0.22l2.04,0.74l2.44,-0.4l2.09,1.69l2.04,0.1l1.05,-0.61l1.04,0.47l0.53,-0.42l-0.59,-0.63l0.05,-1.3l-0.5,-0.86l1.16,-0.5l2.14,-0.22l2.49,0.36l3.17,-0.41l1.76,0.8l1.36,1.5l0.5,0.16l2.83,-1.46l1.09,0.49l2.19,2.68l0.79,1.75l-0.58,2.1l0.42,1.23l1.3,2.4l1.49,2.68l1.07,0.71l0.44,1.35l1.38,0.37l0.84,-0.39l0.7,-1.89l0.12,-1.21l0.09,-2.1l-1.33,-3.65l-0.02,-1.37l-1.25,-2.25l-0.94,-2.74l-0.5,-2.25l0.43,-2.31l1.32,-1.94l1.58,-1.57l3.08,-2.16l0.4,-1.12l1.42,-1.23l1.4,-0.21l1.84,-1.98l2.9,-1.01l1.78,-2.53l-0.39,-3.45l-0.29,-1.2l-0.8,-0.24l-0.12,-3.35l-1.93,-1.14l1.85,0.56l-0.6,-2.26l0.54,-1.55l0.33,2.97l1.43,1.36l-0.87,2.4l0.26,0.14l1.58,-2.81l0.9,-1.38l-0.04,-1.35l-0.7,-0.64l-0.58,-1.94l0.92,0.9l0.62,0.19l0.21,0.92l2.04,-2.78l0.61,-2.62l-0.82,-0.17l0.85,-1.02l-0.08,0.45l1.79,-0.01l3.93,-1.11l-0.83,-0.7l-4.12,0.7l2.34,-1.07l1.63,-0.18l1.22,-0.19l2.07,-0.65l1.35,0.07l1.89,-0.6l0.22,-1.07l-0.84,-0.83l0.29,1.37l-1.16,-0.09l-0.92,-1.99l0.03,-2.01l0.48,-0.86l1.48,-2.28l2.96,-1.15l2.88,-1.34l2.99,-1.9l-0.48,-1.29l-1.83,-2.25L285.18,314.24zM45.62,263.79l-1.5,0.8l-2.55,1.86l0.43,2.42l1.43,1.32l2.8,-1.95l2.43,-2.46l-1.19,-1.63L45.62,263.79zM0,235.23l2.04,-1.26l0.23,-0.68L0,232.61V235.23zM8.5,250.59l-2.77,0.97l1.7,1.52l1.84,1.04l1.72,-0.87l-0.27,-2.15L8.5,250.59zM105.85,283.09l-2.69,0.38l-1.32,-0.62l-0.17,1.52l0.52,2.07l1.42,1.46l1.04,2.13l1.69,2.1l1.12,0.01l-2.44,-3.7L105.85,283.09zM37.13,403.77l-1,-0.28l-0.27,0.26l0.03,0.19l0.32,0.24l0.48,0.63l0.94,-0.21l0.23,-0.36L37.13,403.77zM34.14,403.23l1.5,0.09l0.09,-0.32l-1.38,-0.13L34.14,403.23zM40.03,406.52l-0.5,-0.26l-1.07,-0.5l-0.21,-0.05l-0.16,0.28l0.19,0.58l-0.49,0.48l-0.14,0.33l0.46,1.08l-0.08,0.83l0.7,0.42l0.41,-0.49l0.9,-0.46l1.1,-0.63l0.07,-0.16l-0.71,-1.04L40.03,406.52zM32.17,401.38l-0.75,0.41l0.11,0.12l0.36,0.68l0.98,0.11l0.2,0.04l0.15,-0.17l-0.81,-0.99L32.17,401.38zM27.77,399.82l-0.43,0.3l-0.14,0.22l0.94,0.55l0.33,-0.3l-0.06,-0.7L27.77,399.82z"/>
      </svg>
    </div>
  );
}

export default NorthAmerica;