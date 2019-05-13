$(() => {
    $('.custom-control-input').click((e) => {
        let html = '';
        if (e.target.id === 'cabRadio') {
            html = `
                <div class="placeContent mt-3">
                    <select class="custom-select" id="select" name="place">
                        <option selected>Gabinetes</option>
                        <option value="presidencia">Presidencia</option>
                        <option value="gabinete01">Gabinete 1</option>
                        <option value="gabinete02">Gabinete 2</option>
                        <option value="gabinete03">Gabinete 3</option>
                        <option value="gabinete04">Gabinete 4</option>
                        <option value="gabinete05">Gabinete 5</option>
                        <option value="gabinete06">Gabinete 6</option>
                        <option value="gabinete07">Gabinete 7</option>
                        <option value="gabinete08">Gabinete 8</option>
                        <option value="gabinete09">Gabinete 9</option>
                        <option value="gabinete10">Gabinete 10</option>
                        <option value="gabinete11">Gabinete 11</option>
                        <option value="gabinete12">Gabinete 12</option>
                        <option value="gabinete13">Gabinete 13</option>
                        <option value="gabinete14">Gabinete 14</option>
                        <option value="gabinete15">Gabinete 15</option>
                        <option value="gabinete16">Gabinete 16</option>
                        <option value="gabinete17">Gabinete 17</option>
                        <option value="gabinete18">Gabinete 18</option>
                        <option value="gabinete19">Gabinete 19</option>
                        <option value="gabinete20">Gabinete 20</option>
                    </select>
                </div>
            `;
        } else if (e.target.id === 'sectorRadio') {
            html = `
                <div class="placeContent mt-3">
                    <select class="custom-select" id="select" name="place">
                        <option selected>Setores</option>
                        <option value="almoxarifado">Almoxarifado</option>
                        <option value="arquivo">Arquivo</option>
                        <option value="atas">Atas</option>
                        <option value="contabilidade">Contabilidade</option>
                        <option value="CPD">CPD</option>
                        <option value="cerimonial">Cerimonial</option>
                        <option value="jurídico">Jurídico</option>
                        <option value="diretor">Diretor</option>
                        <option value="expediente">Expediente</option>
                        <option value="imprensa">Imprensa</option>
                        <option value="manutenção">Manutenção</option>
                        <option value="plenário">Plenário</option>
                        <option value="recepção">Recepção</option>
                        <option value="recursos humanos">Recursos Humanos</option>
                        <option value="sala de comissões">Sala de Comissões</option>
                        <option value="secretaria">Secretaria</option>
                        <option value="TV Câmara">TV Câmara</option>
                        <option value="Telefonia">Telefonia</option>
                    </select>                   
                </div>
            `;
        } else if (e.target.id === 'otherPlace') {
            html = `

            `;
        }
        html += `
            <div class="placeContent mt-4">
                <div class="input-group mb-3 d-flex align-items-center">
                    <input type="text" maxlength="6" class="form-control" name="patrimonio" placeholder="Patrimônio" aria-label="" aria-describedby="basic-addon1">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-success" type="button">Check</button>
                    </div>
                </div>
                <div>
                    <textarea class="form-control" maxlength="299" id="exampleFormControlTextarea1" name="description" rows="6" placeholder="Descrição"></textarea>
                </div>
            </div>`;
        $('.placeContent').remove();
        $('.newAttendment').append(html);
    });
});