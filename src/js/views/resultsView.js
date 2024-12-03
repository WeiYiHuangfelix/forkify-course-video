import View from './View.js';
import previewView from './previewView.js'; // 確保正確導入 previewView 模組
import icons from 'url:../../img/icons.svg'; // Parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again.';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new ResultsView();
