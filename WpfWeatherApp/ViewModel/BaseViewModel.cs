using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using System.Windows;

namespace WpfWeatherApp.ViewModel;
public abstract class BaseViewModel : DependencyObject, INotifyPropertyChanged
{
    public event PropertyChangedEventHandler? PropertyChanged;

    protected bool SetProperty<T>(ref T field, T newValue, [CallerMemberName] string? propertyName = null)
    {
        if (!EqualityComparer<T>.Default.Equals(field, newValue))
        {
            field = newValue;
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
            return true;
        }
        return false;
    }
}

public class DelegateCommand : ICommand
{
    private readonly Action<object?>? _executeAction;
    private readonly Func<object?, bool>? _canExecuteAction;

    public DelegateCommand(Action<object?>? executeAction, Func<object?, bool>? canExecuteAction)
    {
        _executeAction = executeAction;
        _canExecuteAction = canExecuteAction;
    }

    public void Execute(object? parameter)
    {
        if (_executeAction is not null)
            if (parameter is not null)
                _executeAction(parameter);
            else
                _executeAction(null);
    }

    public bool CanExecute(object? parameter) => _canExecuteAction?.Invoke(parameter) ?? true;

    public event EventHandler? CanExecuteChanged;

    public void InvokeCanExecuteChanged() => CanExecuteChanged?.Invoke(this, EventArgs.Empty);
}